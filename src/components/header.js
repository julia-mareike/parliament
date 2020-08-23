import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.5rem 1rem`,
      }}
      className={'rowWrapper'}
    >
      <h1 className='nav item'>
        <Link
          to="/"
          className='nav'
        >
          {siteTitle}
        </Link>
      </h1>
      <h3 className='nav item sub'>
        <Link
          to="/calculator"
          className='nav'
        >
          calculator
        </Link>
      </h3>
      <h3 className='nav item sub'>
        <Link
          to="/past-results"
          className='nav'
        >
          past results
        </Link>
      </h3>
      <h3 className='nav item sub'>
        <Link
          to="/about"
          className='nav'
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
