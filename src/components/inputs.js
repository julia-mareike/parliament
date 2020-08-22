import React, { useState, useEffect } from 'react'
import { sum } from 'lodash'

import { activeParties, pastVotes } from '../utils/data'
import { getSeatAllocations } from '../utils/'

export const Inputs = ({  year, setSeats }) => {
  const [currentVotes, setVotes] = useState({})
  const [currentElectorates, setElectorates] = useState({})
  const [totalVotes, setTotalVotes] = useState(0)

  useEffect(() => {
    let total = sum(Object.values(currentVotes))
    setTotalVotes(total)
  }, [currentVotes])

  const handleVotesChange = event => {
    let { value } = event.target
    setVotes({
      ...currentVotes,
      [event.target.name]: Number(value)
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
          <input
            type={'number'}
            name={party}
            value={currentVotes[party] || ''}
            onChange={event => handleVotesChange(event)}
          />
          <input
            type={'number'}
            name={party}
            value={currentElectorates[party] || ''}
            onChange={event => handleElectoratesChange(event)}
            style={{ width: '50px' }}
          />
        </label>
      ))}
      <p>Percentage: {totalVotes}</p>
      <button
        disabled={totalVotes !== 100}
        onClick={
          () => setSeats(
            getSeatAllocations(year, {votes: currentVotes, electorates: currentElectorates})
          )
        }>
        Calculate!
      </button>
      </>
    )
  }
  const { votes, electorates } = pastVotes[year]
  let array = []
  for (let party in votes) {
    array.push({
      name: party,
      votes: votes[party],
      electorates: electorates[party]
    })
  }
  return array.map(party => (
    <label>
      {party.name}
      <input
        type={'number'}
        disabled
        value={party.votes}
      />
      <input
        type={'number'}
        disabled
        value={party.electorates}
        style={{ width: '50px' }}
      />
    </label>
    )
  )
}
