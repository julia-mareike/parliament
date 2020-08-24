import React from 'react'

import { pastVotes } from '../utils/data'

export const Results = ({  year }) => {
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
      <label
        key={party.name}
      >
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
