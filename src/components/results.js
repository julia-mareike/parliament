import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { formatName } from '../utils'
import { pastVotes } from '../utils/data'
import { polls } from '../utils/polls'

export const Results = ({ year, activePoll }) => {
  const { votes, electorates } = pastVotes[year] || polls[activePoll]
  let array = []
  for (let party in votes) {
    array.push({
      name: party,
      votes: votes[party],
      electorates: electorates[party]
    })
  }
  return (
    array.map(party => {
      let electorates = party.electorates ?
        party.electorates > 1 ?
          ` ${party.electorates} electorates` :
          ` ${party.electorates} electorate` :
          ''
      return (
        <Grid container direction="row" spacing={2} key={party.name}>
          <Grid item xs={5}>
            <Typography variant="body1">{formatName(party.name)}</Typography>
          </Grid>
          <Grid container item xs={7}>
            <Grid item xs={5}>
              <Typography variant="body1">{party.votes.toFixed(1)} %</Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography variant="caption">{electorates}</Typography>
            </Grid>
          </Grid>
        </Grid>
      )
    })
  )
}
