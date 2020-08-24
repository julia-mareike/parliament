import React, { useState } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Grid, Typography } from '@material-ui/core'

import Beehive from '../svg/beehive.svg'

const Header = ({ siteTitle }) => {
  const [beehiveOpen, setBeehiveState] = useState(false)
  const toggleBeehiveNav = state => {
    setBeehiveState(!state)
  }
  return (
    <header className='rowWrapper mainNav'>
      <Grid container direction="row" alignItems="baseline">
        <Grid container item spacing={2} direction="row" justify="flex-start" xs={10} sm={4} >

          <Grid item>
            <Typography variant="h1">
              <Link
                to="/"
                className='nav'
              >
                {siteTitle}
              </Link>
            </Typography>
          </Grid>

        </Grid>
        <Grid container item direction="row" justify="center" alignItems="baseline" className={classnames('subMenu', {
          beehiveOpen
        })} xs={2} sm={8}>

          <Grid item sm={3}>
            <Typography variant="h3" className={classnames('sub', { 'item': !beehiveOpen })}>
              <Link
                to="/calculator"
                className='nav'
                activeClassName='activeItem'
              >

                  calculator
              </Link>
            </Typography>

          </Grid>
          <Grid item sm={3}>
            <Typography variant="h3" className={classnames('sub', { 'item': !beehiveOpen })}>
              <Link
                to="/past-results"
                className='nav'
                activeClassName='activeItem'
              >

                past results
              </Link>
            </Typography>

          </Grid>
          <Grid item sm={2}>
            <Typography variant="h3" className={classnames('sub', { 'item': !beehiveOpen })}>
              <Link
                to="/about"
                className='nav'
                activeClassName='activeItem'
              >

              about

              </Link>
            </Typography>
          </Grid>

        </Grid>
        <Grid item sm={2} className='beehiveNav'>
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
