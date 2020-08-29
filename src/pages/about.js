import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Parliament" />
      <Grid container direction={'column'} spacing={3}>
        <Grid item xs={12}>
          <Typography variant={'h6'}>
            what even is mmp
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'body1'}>
            <a href='https://www.youtube.com/watch?v=pljoleVHFug'>mmp: a video introduction</a>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'body1'}>
            how do party vote percentages become seats in parliament? - <a href='https://thespinoff.co.nz/politics/14-09-2017/mmp-maths-how-party-vote-percentages-become-seats-in-parliament/'>the spinoff tells you how</a>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'body1'}>
            more info about parties & policies: <a href='https://policy.nz/'>policy.nz</a>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'body1'}>
            want to see more numbers, charts & graphs? wrap your eyeballs around this <a href='https://docs.google.com/spreadsheets/d/1Wp5B7yKwQh8POEDTauUROOTivK8EXlJTwQZ0ftNpQ2k/'>wild spreadsheet</a>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'h6'}>
            disclaimers
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'body2'}>
            party colours sourced from <a href='https://en.wikipedia.org/wiki/List_of_political_parties_in_New_Zealand'>wikipedia &lt;3</a>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'body2'}>
            the representation of parliament has no concept of govt / opposition - parties are displayed in roughly the same position
            just so it's easy to compare over the years
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'body2'}>
            it will only show a max of 7 overhang seats...
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'body2'}>
            parties in the calculator are listed in order of: currently in government, contested last election, then roughly in order of date founded
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'body2'}>
            different poll forecasts seem to be based on different electorate presumptions, which we have reflected
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'h6'}>
            built by
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'body2'}>
            <a href='https://julia-mareike.gitlab.io/'>julia</a> & <a href='https://mxbialostocki.github.io/'>bam</a>
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage
