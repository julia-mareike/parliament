import React, { useState, useEffect } from 'react'
import { sum } from 'lodash'

import { activeParties } from '../utils/data'
import { getSeatAllocations, formatPartyName } from '../utils/'

import { Typography, Button, TextField, Grid } from '@material-ui/core'

export const Inputs = ({ year, setSeats }) => {
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
  return (
    <>
      <Grid container direction={'column'} alignItems='center'>
        <Grid container direction={'row'} align='center' alignItems='center'>
          <Grid item xs={6}>
            <Typography variant={'button'}>allocated: {totalVotes} %</Typography>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant={'contained'}
              color={'primary'}
              disabled={totalVotes !== 100}
              onClick={
                () => setSeats(
                  getSeatAllocations(year, { votes: currentVotes, electorates: currentElectorates })
                )
              }
            >
              Calculate!
            </Button>
          </Grid>
        </Grid>
        {activeParties.map(party => {
          return (
            <Grid container item direction={'row'} spacing={1} alignContent={'center'}>
              <Grid item xs={6} align={'right'}>
                <TextField
                  margin={'dense'}
                  variant='outlined'
                  type='number'
                  size='small'
                  label={`${formatPartyName(party)}`}
                  name={party}
                  value={currentVotes[party] || ''}
                  onChange={handleVotesChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin={'dense'}
                  variant='outlined'
                  type='number'
                  size='small'
                  label={`electorates`}
                  name={party}
                  value={currentElectorates[party] || ''}
                  onChange={handleElectoratesChange}
                />
              </Grid>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}
