import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Parliament } from '../components/parliament'
import { getCoordinates, getSeatAllocations, formatName, removeWhitespace } from '../utils'
import { pollElectorates, polls } from '../utils/polls'

import { Grid, Tabs, Tab } from '@material-ui/core'

import { useStyles } from '../utils'

const PollResults = () => {
  const coordinates = getCoordinates()
  const [tabValue, setTabValue] = useState(0)
  const [seats, setSeats] = useState(getSeatAllocations(null, { electorates: pollElectorates, votes: polls['newshub'] }))

  const { hideMob, hideDesktop, parliament } = useStyles()

  const handleChange = (event, newValue) => {
    const { textContent } = event.target
    const name = removeWhitespace(textContent)
    setSeats(getSeatAllocations(null, { electorates: pollElectorates, votes: polls[name] }))
    setTabValue(newValue)
  }

  const Polls = () => {
    const pollsArray = Object.keys(polls)
    return (
      <Tabs
        value={tabValue}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        variant='fullWidth'
      >
        {pollsArray.map(poll => {
          return (
            <Tab
              label={formatName(poll)}
              name={poll}
              key={poll}
              disabled={poll === 'rnz'}
            />
          )
        })}
      </Tabs>
    )
  }

  return (
    <Layout>
      <SEO title='Parliament' />
      <Grid container spacing={2} direction='row' justify='center' alignItems='center' >
        <Grid item xs={12} md={6} className={parliament}>
          <Parliament coordinates={coordinates} seats={seats} />
        </Grid>
        <Grid item xs={12}>
          <Polls />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default PollResults
