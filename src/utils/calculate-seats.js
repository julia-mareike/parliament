import { sum, values, findIndex, forEach, max as _max, indexOf } from 'lodash'

export const formula = (votes, idx) => {
  return votes / (idx * 2 + 1)
}

export const adjustVotes = list => {
  const subtotal = sum(values(list)).toFixed(1)
  const adjustedVotes = {}
  for (let party in list) {
    const newVote = (100 / subtotal) * list[party]
    adjustedVotes[party] = Number(newVote)
  }
  return adjustedVotes
}

export const createVoteObject = obj => {
  const array = []
  forEach(obj, (votes, party) => {
    if (votes > 0) {
      const newObject = {
        party: party,
        votes: votes,
        adjusted: votes,
        allocated: 0,
        overhang: false
      }
      array.push(newObject)
    }
  })
  return array
}

export const calculateVotes = (electorates, votes) => {
  const overhang = []
  const rawVotes = Object.assign({}, votes)
  for (let party in rawVotes) {
    if (rawVotes[party] < 5) {
      !electorates[party]
        ? rawVotes[party] = 0
        : overhang.push([party, electorates[party]])
      // this isn't actually how overhang works
    }
  }
  const proportional = adjustVotes(rawVotes)
  let allVotes = createVoteObject(proportional)
  // for (let party of overhang) {
  //   const target = findIndex(allVotes, ['party', party[0]])
  //   allVotes[target].allocated = 1
  //   allVotes[target].overhang = true
  // }
  return allVotes
}

// this applies the Saint Lague calculation
export const getSeats = (totals, idx = 0, seats = 120) => {
  if (seats > 0) {
    const array = totals.map(party => {
      // if (!party.overhang)
        return formula(party.adjusted, idx)
    })
    const current = indexOf(array, _max(array))
    !totals[current].overhang
      ? totals[current].allocated++
      : seats++
    totals[current].adjusted = formula(totals[current].votes, totals[current].allocated)
    getSeats(totals, idx++, --seats)
  }
  return totals
}
