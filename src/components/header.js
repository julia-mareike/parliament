import React, { useState } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Grid, Typography, Menu, MenuItem } from '@material-ui/core'

import { useStyles, createSlug } from '../utils'
import Beehive from '../svg/beehive.svg'

const Header = ({ siteTitle }) => {
  const navItems = ['home', 'calculator', 'polls', 'past results', 'about']
  const { header, headerWrap, navItem, mainNav, beehiveNav, hideMob } = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const openBeehiveNav = event => {
    setAnchorEl(event.currentTarget)
  }
  const closeMenu = () => {
    setAnchorEl(null)
  }
  return (
    <header className={header}>
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
              {siteTitle}
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
          horizontal: 'left'
        }}
      >
        {navItems.map(item => (
          <MenuItem onClick={closeMenu}>
            <Typography variant='h6'>
              <Link
                to={`/${createSlug(item)}`}
                className={navItem}
                activeStyle={{ color: 'goldenrod' }}
              >
                {item}
              </Link>
            </Typography>
          </MenuItem>
        ))}
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
