import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Parliament } from '../components/parliament'
import { Results } from '../components/results'
import { getCoordinates, getSeatAllocations } from '../utils'
import { years } from '../utils/data'

import { Grid, Button } from '@material-ui/core'

import './index.css'

const PastResults = () => {
  const coordinates = getCoordinates()
  const [activeYear, setActiveYear] = useState(years[0])
  const [seats, setSeats] = useState(getSeatAllocations(activeYear))

  return (
    <Layout>
      <SEO title="Parliament" />
      <Grid container spacing={4} direction='row' justify="center" style={{ width: '80%', margin: '0 auto' }}>

        <Grid item xs={12} sm={6}>
          <Parliament coordinates={coordinates} seats={seats} year={activeYear} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Results year={activeYear} setSeats={setSeats} />
        </Grid>
        <Grid container item justify="space-between" xs={10}>
          {years.map(year => (
            <Button
              name={year}
              key={year}
              onClick={() => {
                setSeats(getSeatAllocations(year))
                setActiveYear(year)
              }}
            >
              {year}
            </Button>
          ))}
        </Grid>

      </Grid>
    </Layout>
  )
}

export default PastResults
