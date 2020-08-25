import React, { useState } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { Grid, Typography, Menu, MenuItem } from '@material-ui/core'
import useStyles from '../../plugins/custom-mui-theme/theme/custom'

import Beehive from '../svg/beehive.svg'

const Header = ({ siteTitle }) => {
  const { header, headerWrap, nav, beehiveNav } = useStyles()
  const [beehiveOpen, setBeehiveState] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const toggleBeehiveNav = (state, event) => {
    setBeehiveState(!state)
    setAnchorEl(event.currentTarget)
  }
  const closeMenu = () => {
    setAnchorEl(null)
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
        <Grid container item direction="row" justify="flex-end" alignContent="flex-end" alignItems="baseline" className={'subMenu'} xs={2} md={8}>
          <Grid item md={3}>
            <Typography variant='h3' align='right'>
              <Link
                to='/calculator'
                className={nav}
                activeClassName='activeItem'
              >
                calculator
              </Link>
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant='h3' align='right'>
              <Link
                to='/past-results'
                className={nav}
                activeClassName='activeItem'
              >
                past results
              </Link>
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant='h3' align='right'>
              <Link
                to='/about'
                className={nav}
                activeClassName='activeItem'
              >
              about
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={2} className={beehiveNav}>
          <Beehive role='button' onClick={event => toggleBeehiveNav(beehiveOpen, event)}/>
        </Grid>
      </Grid>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <MenuItem onClick={closeMenu}>
          <Typography variant='h6'>
            <Link
              to='/calculator'
              className={nav}
              activeClassName='activeItem'
            >
              calculator
            </Link>
          </Typography>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <Typography variant='h6'>
            <Link
              to='/past-results'
              className={nav}
              activeClassName='activeItem'
            >
              past results
            </Link>
          </Typography>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <Typography variant='h6'>
            <Link
              to='/about'
              className={nav}
              activeClassName='activeItem'
            >
              about
            </Link>
          </Typography>
        </MenuItem>
      </Menu>
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
