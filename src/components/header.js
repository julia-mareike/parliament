import React, { useState } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Grid, Typography } from '@material-ui/core'
import useStyles from '../../plugins/custom-mui-theme/theme/custom'

import Beehive from '../svg/beehive.svg'

const Header = ({ siteTitle }) => {
  const { header, headerWrap, nav, beehiveNav } = useStyles()
  const [beehiveOpen, setBeehiveState] = useState(false)
  const toggleBeehiveNav = state => {
    setBeehiveState(!state)
  }
  return (
    <header className={header}>
      <Grid container direction="row" alignItems="baseline" className={headerWrap}>
        <Grid container item spacing={2} direction="row" alignItems="baseline" justify="flex-start" xs={10} md={4} >

          <Typography variant="h2">
            <Link
              to="/"
              className={nav}
            >
              {siteTitle}
            </Link>
          </Typography>

        </Grid>
        <Grid container item direction="row" justify="flex-end" alignContent="flex-end" alignItems="baseline" className={classnames('subMenu', {
          beehiveOpen
        })} xs={2} md={8}>

          <Grid item md={3}>
            <Typography variant="h3" align='right' className={!beehiveOpen}>
              <Link
                to="/calculator"
                className={nav}
                activeClassName='activeItem'
              >
                calculator
              </Link>
            </Typography>

          </Grid>
          <Grid item md={3}>
            <Typography variant="h3" align='right' className={!beehiveOpen}>
              <Link
                to="/past-results"
                className={nav}
                activeClassName='activeItem'
              >
                past results
              </Link>
            </Typography>

          </Grid>
          <Grid item md={2}>
            <Typography variant="h3" align='right' className={!beehiveOpen}>
              <Link
                to="/about"
                className={nav}
                activeClassName='activeItem'
              >
              about
              </Link>
            </Typography>
          </Grid>

        </Grid>
        <Grid item md={2} className={beehiveNav}>
          <Beehive role='button' onClick={() => toggleBeehiveNav(beehiveOpen)}/>
        </Grid>
      </Grid>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
