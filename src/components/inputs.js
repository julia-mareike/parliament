import React, { useState } from 'react'

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
  const [currentVotes, setVotes] = useState({})
  const [currentElectorates, setElectorates] = useState({})

  const handleVotesChange = event => {
    setVotes({
      ...currentVotes,
      [event.target.name]: Number(event.target.value)
    })
  }
  const handleElectoratesChange = event => {
    setElectorates({
      ...currentElectorates,
      [event.target.name]: Number(event.target.value)
    })
  }
  if (year === '2020') {
    return (
      <>
      {activeParties.map(party => (
        <label>
          {party}
          <input type={'number'} name={party} value={currentVotes[party]} onChange={event => handleVotesChange(event)}/>
          <input type={'number'} name={party} value={currentElectorates[party]} onChange={event => handleElectoratesChange(event)}/>
        </label>
      ))}
      <button onClick={() => setSeats(getSeatAllocations(year, {votes: currentVotes, electorates: currentElectorates}))}>Calculate!</button>
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
  return array.map(party => (
    <label>
      {party.name}
      <input type={'number'} disabled value={party.votes} />
    </label>
    )
  )
}
