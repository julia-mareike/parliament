/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Grid } from '@material-ui/core'

import Header from './header'
import './layout.css'

import useStyles from '../../plugins/custom-mui-theme/theme/custom'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { layout } = useStyles()

  return (
    <>

      <Grid container direction="row" justify="space-between" className={layout}>

        <Grid item xs={12}>
          <Header siteTitle={data.site.siteMetadata.title} />
        </Grid>
        <Grid item xs={12}>
          <main>{children}</main>
        </Grid>
        <Grid item xs={12}>
          <footer>
          © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.parliament.nz/en/">Parliament</a>
          </footer>
        </Grid>

      </Grid>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
