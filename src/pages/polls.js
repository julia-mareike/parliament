import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Parliament } from '../components/parliament'
// import { PollResults } from '../components/poll-results'
import { getCoordinates, getSeatAllocations } from '../utils'
import { pollElectorates, polls } from '../utils/polls'

import { Grid, Tabs, Tab, Typography } from '@material-ui/core'

import { useStyles } from '../utils'

const PollResults = () => {
  const coordinates = getCoordinates()
  const [tabValue, setTabValue] = useState(0)
  const [seats, setSeats] = useState(getSeatAllocations(null, { electorates: pollElectorates, votes: polls['newshub'] }))

  const { hideMob, hideDesktop, parliament } = useStyles()

  const handleChange = (event, newValue) => {
    const { textContent } = event.target
    setSeats(getSeatAllocations(null, { electorates: pollElectorates, votes: polls[textContent] }))
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
        variant='scrollable'
        scrollButtons='on'
      >
        {pollsArray.map(poll => (
          <Tab
            label={poll}
            key={poll}
            disabled={poll === 'rnz'}
          >
            {poll}
          </Tab>
        ))}
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
        <Grid container item spacing={1} xs={12} md={6} justify='center'>
          <Grid item xs={12} className={hideDesktop}>
            <Polls />
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant={'body2'}>
              ( Poll forecasts are based on ACT winning one electorate seat )
            </Typography>
            {/*<PollResults year={activeYear} setSeats={setSeats} />*/}
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={4} direction='row' justify='space-evenly' alignItems='center' className={hideMob}>
        <Polls />
      </Grid>
    </Layout>
  )
}

export default PollResults
