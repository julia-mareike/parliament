import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { MainNav } from './main-nav'
import { DropdownNav } from './dropdown-nav'
import { useStyles } from '../utils'

const Header = () => {
  const navItems = ['home', 'calculator', 'polls', 'past results', 'about']
  const { header } = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  return (
    <header className={header}>
      <MainNav setAnchorEl={setAnchorEl} navItems={navItems} />
      <DropdownNav anchorEl={anchorEl} setAnchorEl={setAnchorEl} navItems={navItems} />
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
