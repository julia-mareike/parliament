import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Grid, Typography } from '@material-ui/core'

import Beehive from '../svg/beehive.svg'
import { createSlug, useStyles } from '../utils'

export const MainNav = ({ setAnchorEl, navItems }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { headerWrap, navItem, mainNav, beehiveNav, hideMob } = useStyles()
  const openBeehiveNav = event => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <Grid container direction="row" className={headerWrap}>
      <Grid item xs={2} className={beehiveNav}>
        <Beehive role='menu' onClick={event => openBeehiveNav(event)}/>
      </Grid>
      <Grid item xs={10} md={4} className={mainNav}>
        <Typography variant="h3">
          <Link
            to="/"
            className={navItem}
          >
            {data.site.siteMetadata.title}
          </Link>
        </Typography>
      </Grid>
      <Grid container item direction="row" justify="space-evenly" alignContent="flex-end" alignItems="center" className={hideMob} xs={2} md={8}>
        {navItems.filter(item => item !== 'home').map(item => (
          <Grid item md={3}>
            <Typography variant='h6' align='center'>
              <Link
                to={`/${createSlug(item)}`}
                className={navItem}
                activeStyle={{ color: 'goldenrod' }}
              >
                {item}
              </Link>
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
