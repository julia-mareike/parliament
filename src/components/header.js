import React, { useState } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Beehive from '../svg/beehive.svg'

const Header = ({ siteTitle }) => {
  const [beehiveOpen, setBeehiveState] = useState(false)
  const toggleBeehiveNav = state => {
    setBeehiveState(!state)
  }
  return (
    <header>
      <div
        className='rowWrapper mainNav'
      >
        <h1 className='item'>
          <Link
            to="/"
            className='nav'
          >
            {siteTitle}
          </Link>
        </h1>
        <div className={classnames('subMenu', {
          beehiveOpen
        })}>
          <h3 className={classnames('sub', {
            'item': !beehiveOpen
          })}>
            <Link
              to="/calculator"
              className='nav'
              activeClassName='activeItem'
            >
              calculator
            </Link>
          </h3>
          <h3 className={classnames('sub', {
            'item': !beehiveOpen
          })}>
            <Link
              to="/past-results"
              className='nav'
              activeClassName='activeItem'
            >
              past results
            </Link>
          </h3>
          <h3 className={classnames('sub', {
            'item': !beehiveOpen
          })}>
            <Link
              to="/about"
              className='nav'
              activeClassName='activeItem'
            >
              about
            </Link>
          </h3>
        </div>
        <div className='beehiveNav'>
          <Beehive role='button' onClick={() => toggleBeehiveNav(beehiveOpen)}/>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
