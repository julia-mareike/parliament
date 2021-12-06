import React, { useState } from 'react'
import { Grid } from '@material-ui/core'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Parliament } from '../components/parliament'
import { Inputs } from '../components/inputs'
import { getCoordinates, getSeatAllocations, useStyles } from '../utils'

const IndexPage = () => {
  const coordinates = getCoordinates()
  const [seats, setSeats] = useState(getSeatAllocations('2020'))
  const { parliament } = useStyles()

  return (
    <Layout>
      <SEO title="Calculator" />
      <Grid container spacing={4} direction='row' justify="center" alignItems="flex-start">
        <Grid item xs={12} md={6} className={parliament} >
          <Parliament coordinates={coordinates} seats={seats} year={'2020'}/>
        </Grid>
        <Grid container item spacing={4} xs={12} md={6} justify="center">
          <Grid item xs={12}>
            <Inputs year={'2020'} setSeats={setSeats} />
          </Grid>
        </Grid>

      </Grid>
    </Layout>
  )
}

export default IndexPage
