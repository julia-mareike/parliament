import React from 'react'
import { Link } from 'gatsby'
import { Menu, MenuItem, Typography } from '@material-ui/core'
import { createSlug, useStyles } from '../utils'

export const DropdownNav = ({ anchorEl, setAnchorEl, navItems }) => {
  const { navItem } = useStyles()
  const closeMenu = () => {
    setAnchorEl(null)
  }

  return (
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
  )
}
