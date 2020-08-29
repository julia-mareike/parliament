import React, { useState, useEffect } from 'react'
import { Typography, Button, TextField, Grid } from '@material-ui/core'
import { sum } from 'lodash'

import { activeParties } from '../utils/data'
import { getSeatAllocations, formatName, useStyles } from '../utils/'


export const Inputs = ({ year, setSeats }) => {
  let activePartiesArray = Object.keys(activeParties)
  const [currentVotes, setVotes] = useState(activeParties)
  const [currentElectorates, setElectorates] = useState({})
  const [totalVotes, setTotalVotes] = useState(0)

  const { votesAllocated } = useStyles()
  let color = totalVotes !== 100 ? totalVotes > 100 ? 'error' : 'textPrimary' : 'secondary'
  useEffect(() => {
    let total = sum(Object.values(currentVotes).filter(votes => typeof votes === 'number'))
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
  const handleFocus = event => {
    let { value } = event.target
    if (value === '0') {
      setVotes({
        ...currentVotes,
        [event.target.name]: ''
      })
    }
  }
  return (
    <>
      <Grid container direction={'column'} alignItems='center'>
        <Grid container direction={'row'} align='center' alignItems='center'>
          <Grid item xs={6}>
            <Typography variant={'button'} color={color} className={votesAllocated}>votes: {totalVotes} %</Typography>
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
        {activePartiesArray.map(party => {
          return (
            <Grid
              key={party}
              container
              item
              direction={'row'}
              spacing={1}
              alignContent={'center'}
            >
              <Grid item xs={6} style={{ textAlign: 'right' }}>
                <TextField
                  margin={'dense'}
                  variant='outlined'
                  type='number'
                  size='small'
                  label={`${formatName(party)}`}
                  name={party}
                  value={currentVotes[party]}
                  onChange={handleVotesChange}
                  onFocus={handleFocus}
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
