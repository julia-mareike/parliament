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
  const [totalElectorates, setTotalElectorates] = useState(0)

  const { calculatorText } = useStyles()
  let maxVotes = totalVotes > 100
  let maxElectorates = totalElectorates > 71
  let color = totalVotes !== 100 ? maxVotes ? 'error' : 'textPrimary' : 'secondary'

  useEffect(() => {
    let total = sum(Object.values(currentVotes).filter(votes => typeof votes === 'number'))
    // round total to 1 decimal point (or none)
    setTotalVotes(+total.toFixed(1))
  }, [currentVotes])

  useEffect(() => {
    let total = sum(Object.values(currentElectorates).filter(votes => typeof votes === 'number'))
    setTotalElectorates(total)
  }, [currentElectorates])

  const handleVotesChange = event => {
    let { value } = event.target
    setVotes({
      ...currentVotes,
      [event.target.name]: Number(value)
    })
  }
  const handleElectoratesChange = event => {
    let value = Math.floor(event.target.value)
    setElectorates({
      ...currentElectorates,
      [event.target.name]: value
    })
  }
  return (
    <>
      <Grid container direction={'column'} alignItems='center'>
        <Grid container direction={'row'} align='center' alignItems='center' spacing={2}>
          <Grid item xs={6}>
            <Typography
              variant={'button'}
              color={color}
              className={calculatorText}
            >
              votes: {totalVotes} %
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant={'contained'}
              color={'primary'}
              disabled={totalVotes !== 100 || maxElectorates}
              onClick={
                () => setSeats(
                  getSeatAllocations(year, { votes: currentVotes, electorates: currentElectorates })
                )
              }
            >
              Calculate!
            </Button>
          </Grid>
          {maxElectorates &&
            <Grid item xs={12}>
              <Typography
                variant={'button'}
                color={'error'}
                className={calculatorText}
              >
                max of 71 electorates
              </Typography>
            </Grid>
          }
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
