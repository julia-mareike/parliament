import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Parliament } from '../components/parliament'
import { Results } from '../components/results'
import { getCoordinates, getSeatAllocations } from '../utils'
import { years } from '../utils/data'

import { Grid, Button } from '@material-ui/core'

import useStyles from '../../plugins/custom-mui-theme/theme/custom'

import './index.css'

const PastResults = () => {
  const coordinates = getCoordinates()
  const [activeYear, setActiveYear] = useState(years[0])
  const [seats, setSeats] = useState(getSeatAllocations(activeYear))

  const { hideMob, hideDesktop, parliament } = useStyles()

  const Buttons = ({ years }) => {
    return (
      years.map(year => (
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
      )))
  }

  return (
    <Layout>
      <SEO title="Parliament" />
      <Grid container spacing={1} direction='row' justify="center" alignItems="center" >

        <Grid item xs={12} md={6} className={parliament}>
          <Parliament coordinates={coordinates} seats={seats} year={activeYear}/>
        </Grid>
        <Grid container item spacing={4} xs={11} md={6} justify="center">
          <Grid item xs={12} className={hideDesktop}>
            <Buttons years={years}/>
          </Grid>
          <Grid item xs={12}>
            <Results year={activeYear} setSeats={setSeats} />
          </Grid>
        </Grid>

      </Grid>
      <Grid container spacing={4} direction='row' justify="space-evenly" alignItems="center" className={hideMob}>
        <Buttons years={years}/>
      </Grid>
    </Layout>
  )
}

export default PastResults
