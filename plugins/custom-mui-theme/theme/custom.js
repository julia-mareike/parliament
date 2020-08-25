import { makeStyles } from '@material-ui/core/styles'
// import classnames from 'classnames'

const useStyles = makeStyles((theme) => ({
  primary: {
    color: 'goldenrod'
  },
  layout: {
    margin: `0 auto`,
    maxWidth: '70vw',
    [theme.breakpoints.down('md')]: {
      maxWidth: '90vw'
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100vw'
    },
    minHeight: '100vh',
    padding: `6rem 1.0875rem 0 1.0875rem`
  },
  header: {
    background: `#000000`,
    position: 'fixed',
    top: '0',
    zIndex: '10',
    width: '100vw',
    height: '6rem'
  },
  headerWrap: {
    margin: `0 auto`,
    padding: `1rem 1rem`,
    maxWidth: '70vw',
    [theme.breakpoints.down('md')]: {
      maxWidth: '90vw'
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100vw'
    }
  },
  nav: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: 'grey'
    }
  },
  beehiveNav: {
    '&:hover': {
      cursor: 'pointer'
    },
    '&active': {
      cursor: 'pointer'
    },
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  parliament: {
    maxHeight: '80vh'
  },
  hideMob: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      lineHeight: '0'
    }
  },
  hideDesktop: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
      lineHeight: '0'
    }
  },
  footer: {
    background: `#ffffff`,
    position: 'fixed',
    bottom: '0rem',
    zIndex: '10',
    width: '100vw'
  },
  footerWrap: {
    margin: `0 auto`,
    padding: `1rem 1rem 1rem 1rem`,
    maxWidth: '70vw',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90vw'
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100vw'
    }
  },
  fontOverride: {
    fontFamily: 'Roboto Mono'
  }
}))

export default useStyles
