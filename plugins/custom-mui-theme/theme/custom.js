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
    padding: `9rem 1.0875rem 0 1.0875rem`
  },
  header: {
    padding: '0.5rem 1.5rem 0.8rem',
    maxWidth: '960px',
    margin: '0 auto',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  headerWrap: {
    margin: `0 auto`,
    padding: `1rem 1rem 0 1rem`,
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
  headerContainer: {
    height: '1rem',
    borderBottom: 'solid #f50057 1px'
  },
  fontOverride: {
    fontFamily: 'Roboto Mono'
  }
}))

export default useStyles
