import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  primary: {
    color: 'goldenrod'
  },
  layout: {
    margin: `0 auto`,
    maxWidth: '70vw',
    [theme.breakpoints.down('sm')]: {
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
    padding: `0 1rem`,
    maxWidth: '70vw',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90vw'
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100vw'
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
