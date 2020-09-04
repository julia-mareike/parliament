import React, { useState } from 'react'
import { Grid, Tabs, Tab, Hidden } from '@material-ui/core'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Parliament } from '../components/parliament'
import { Results } from '../components/results'
import { getCoordinates, getSeatAllocations, useStyles } from '../utils'
import { years } from '../utils/data'

const PastResults = () => {
  const coordinates = getCoordinates()
  const [activeYear, setActiveYear] = useState(years[0])
  const [tabValue, setTabValue] = useState(0)
  const [seats, setSeats] = useState(getSeatAllocations(activeYear))

  const { parliament } = useStyles()

  const handleChange = (event, newValue) => {
    const { innerText } = event.target
    setSeats(getSeatAllocations(innerText))
    setActiveYear(innerText)
    setTabValue(newValue)
  }

  const PastYears = ({ years }) => {
    return (
      <Tabs
        value={tabValue}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        variant='fullWidth'
        centered
      >
        {years.map(year => (
          <Tab
            label={year}
            key={year}
          />
        ))}
      </Tabs>
    )
  }

  return (
    <Layout>
      <SEO title='Parliament' />
      <Grid container spacing={2} direction='row' justify='center' alignItems='center' >
        <Grid item xs={12} md={6} className={parliament}>
          <Parliament coordinates={coordinates} seats={seats} year={activeYear}/>
        </Grid>
        <Grid container item spacing={1} xs={12} md={6} justify='center'>
          <Hidden mdUp>
            <Grid item xs={12}>
              <PastYears years={years}/>
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={10}>
            <Results year={activeYear} />
          </Grid>
        </Grid>
      </Grid>
      <Hidden smDown>
        <Grid container spacing={4} direction='row' justify='space-evenly' alignItems='center'>
          <PastYears years={years}/>
        </Grid>
      </Hidden>
    </Layout>
  )
}

export default PastResults
