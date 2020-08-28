import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const IndexPage = () => {
  console.log('ᕕ( ᐛ )ᕗ')
  return (
    <Layout>
      <SEO title="Parliament" />
      <Grid container direction={'column'} spacing={3}>
        <Grid item xs={12}>
          <Typography variant={'h1'}>
            parliament seat calculator
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'body1'}>
            welcome!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'body1'}>
            play around with party votes and electorate seats, and see how many seats
            everyone will get in parliament...
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'body1'}>
            <Link
              to="/calculator"
              style={{ color: 'goldenrod' }}
            >
              -> here
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'body1'}>
            it's a bit like the official <a href='https://elections.nz/stats-and-research/mmp-seat-allocation-calculator/'>elections nz</a> one, but prettier (✿◠‿◠)
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'body1'}>
            scroll through
            {' '}
            <Link
              to="/past-results"
              style={{ color: 'goldenrod' }}
            >
              election results of yore
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'body1'}>
            <Link
              to="/about"
              style={{ color: 'goldenrod' }}
            >
              learn / disclaimers
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage
