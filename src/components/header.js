import React, { useState } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Grid, Typography, Menu, MenuItem } from '@material-ui/core'

import { MainNav } from './main-nav'
import { useStyles, createSlug } from '../utils'
import Beehive from '../svg/beehive.svg'

const Header = () => {
  const navItems = ['home', 'calculator', 'polls', 'past results', 'about']
  const { header, navItem } = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const closeMenu = () => {
    setAnchorEl(null)
  }
  return (
    <header className={header}>
      <MainNav setAnchorEl={setAnchorEl} navItems={navItems} />
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
