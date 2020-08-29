import React, { useState } from 'react'
import { Grid, Tabs, Tab } from '@material-ui/core'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Parliament } from '../components/parliament'
import { Results } from '../components/results'

import { getCoordinates, getSeatAllocations, formatName, removeWhitespace, useStyles } from '../utils'
import { polls } from '../utils/polls'

const PollResults = () => {
  const pollsArray = Object.keys(polls)
  const { parliament, pollTab, hideDesktop, hideMob } = useStyles()
  const coordinates = getCoordinates()

  const [tabValue, setTabValue] = useState(0)
  const [seats, setSeats] = useState(getSeatAllocations(null, { electorates: polls[pollsArray[0]].electorates, votes: polls[pollsArray[0]].votes }))
  const [activePoll, setActivePoll] = useState(pollsArray[0])

  const handleChange = (event, newValue) => {
    const { textContent } = event.target
    const name = removeWhitespace(textContent)
    setSeats(getSeatAllocations(null, { votes: polls[name].votes, electorates: polls[name].electorates }))
    setTabValue(newValue)
    setActivePoll(name)
  }

  const Polls = () => {
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
              className={pollTab}
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
        <Grid container item spacing={1} xs={12} md={6} justify='center'>
          <Grid item xs={12} className={hideDesktop}>
            <Polls />
          </Grid>
          <Grid item xs={12} sm={10}>
            <Results activePoll={activePoll} />
          </Grid>
        </Grid>
        <Grid container spacing={4} direction='row' justify='space-evenly' alignItems='center' className={hideMob}>
          <Polls />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default PollResults
