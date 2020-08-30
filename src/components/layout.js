import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

import Header from './header'
import './layout.css'

import { useStyles } from '../utils'

const Layout = ({ children }) => {
  const { layout } = useStyles()

  return (
    <>
      <Header />
      <Grid container direction="row" justify="space-between" className={layout}>
        <Grid item xs={12}>
          <main>{children}</main>
        </Grid>
      </Grid>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
