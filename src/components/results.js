import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { pastVotes } from '../utils/data'

export const Results = ({ year }) => {
  const { votes, electorates } = pastVotes[year]
  let array = []
  for (let party in votes) {
    array.push({
      name: party,
      votes: votes[party],
      electorates: electorates[party]
    })
  }
  return (

    array.map(party => (
      <Grid container direction="row" spacing={2} key={party.name}>
        <Grid item xs={4}>
          {party.name}
        </Grid>
        <Grid container item xs={8}>
          <Grid item xs={8}>
            <Typography variant="body1">{party.votes}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">{party.electorates}</Typography>
          </Grid>
        </Grid>
      </Grid>
    )
    )
  )
}
