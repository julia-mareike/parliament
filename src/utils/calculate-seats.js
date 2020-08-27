import { sum, values, forEach, max as _max, indexOf } from 'lodash'

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

export const createVoteObject = (obj, electorates) => {
  const array = []
  forEach(obj, (votes, party) => {
    if (party === 'Other') return
    if (votes || electorates[party]) {
      const newObject = {
        party: party,
        votes: votes,
        adjusted: votes,
        allocated: 0,
        electorates: electorates[party]
      }
      array.push(newObject)
    }
  })
  return array
}

export const calculateVotes = (electorates, votes) => {
  if (!electorates || !votes) return null
  const rawVotes = Object.assign({}, votes)
  for (let party in rawVotes) {
    if (rawVotes[party] < 5 && !electorates[party]) {
      rawVotes[party] = 0
    }
  }
  const proportional = adjustVotes(rawVotes)
  return createVoteObject(proportional, electorates)
}

// this applies the Saint Lague calculation
let overhang
let result

export const getSeats = (totals, idx = 0, seats = 120) => {
  if (seats > 0) {
    const array = totals.map(party => formula(party.adjusted, idx))
    const current = indexOf(array, _max(array))
    totals[current].allocated++
    totals[current].adjusted = formula(totals[current].votes, totals[current].allocated)
    getSeats(totals, idx++, --seats)
  } else {
    overhang = 0
    result = totals.map(party => {
      if (party.electorates > party.allocated) {
        party.overhang = party.electorates - party.allocated
        overhang++
      }
      return party
    })
  }
  return { ...result, overhang }
}
