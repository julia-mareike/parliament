import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
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
      <h3 className='item sub'>
        <Link
          to="/calculator"
          className='nav'
          activeClassName='activeItem'
        >
          calculator
        </Link>
      </h3>
      <h3 className='item sub'>
        <Link
          to="/past-results"
          className='nav'
          activeClassName='activeItem'
        >
          past results
        </Link>
      </h3>
      <h3 className='nav item sub'>
        <Link
          to="/about"
          className='nav'
          activeClassName='activeItem'
        >
          about
        </Link>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
