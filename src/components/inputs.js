import React, { useState, useEffect } from 'react'
import { sum } from 'lodash'

import { activeParties } from '../utils/data'
import { getSeatAllocations, formatPartyName } from '../utils/'

import { Input, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Typography, Button } from '@material-ui/core'

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
    <TableContainer style={{ maxHeight: '80vh' }}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell>Party</TableCell>
            <TableCell>Vote %</TableCell>
            <TableCell>Electorates</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {activeParties.map(party => (
            <TableRow key={party}>
              <TableCell>{formatPartyName(party)}</TableCell>
              <TableCell>
                <Input
                  type={'number'}
                  name={party}
                  label={party}
                  value={currentVotes[party] || ''}
                  onChange={event => handleVotesChange(event)}
                />
              </TableCell>
              <TableCell>
                <Input
                  type={'number'}
                  name={party}
                  label={party}
                  value={currentElectorates[party] || ''}
                  onChange={event => handleElectoratesChange(event)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Typography>Percentage: {totalVotes}</Typography>
    <Button
      disabled={totalVotes !== 100}
      onClick={
        () => setSeats(
          getSeatAllocations(year, { votes: currentVotes, electorates: currentElectorates })
        )
      } fullWidth>
      Calculate!
    </Button>
    </>
  )
}
