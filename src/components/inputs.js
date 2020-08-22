import React from 'react'

import { activeParties, pastVotes } from '../utils/data'
import { getSeatAllocations } from '../utils/'

const fakeButtonVotes = {
  votes: {
    National: 50,
    Labour: 20,
    Greens: 20,
    NZFirst: 6,
    ACT: 4
  },
  electorates: {
    National: 42,
    Labour: 22,
    Greens: 0,
    NZFirst: 0,
    ACT: 1,
  }
}
export const Inputs = ({  year, setSeats }) => {
  if (year === '2020') {
    return (
      <>
      {activeParties.map(party => (
        <label>
          {party}
          <input type={'number'}>
          </input>
        </label>
      ))}
      <button onClick={() => setSeats(getSeatAllocations(year, fakeButtonVotes))}>Calculate!</button>
      </>
    )
  }
  const { votes } = pastVotes[year]
  let array = []
  for (let party in votes) {
    array.push({
      name: party,
      votes: votes[party]
    })
  }
  return array.map(party => {
      return (
        <label>
          {party.name}
          <input type={'number'} disabled value={party.votes} />
        </label>
        )
  })
}
