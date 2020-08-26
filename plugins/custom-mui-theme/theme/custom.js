import { makeStyles } from '@material-ui/core/styles'

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
    height: '5.2rem',
    [theme.breakpoints.down('sm')]: {
      height: '4rem'
    },
  },
  headerWrap: {
    margin: `0 auto`,
    padding: `1rem 1rem`,
    maxWidth: '70vw',
    [theme.breakpoints.down('md')]: {
      maxWidth: '90vw',
      justifyContent: 'flex-end'
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100vw',
    }
  },
  navItem: {
    color: 'white',
    textDecoration: 'none',
    wordWrap: 'initial',
    '&:hover': {
      color: 'grey'
    },
  },
  beehiveNav: {
    '&:hover': {
      cursor: 'pointer'
    },
    '&:hover $svg $g': {
      fill: 'goldenrod'
    },
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  parliament: {
    maxHeight: '60vh',
    maxWidth: '45vh',
    [theme.breakpoints.down('lg')]: {
      maxHeight: '70vh',
      maxWidth: '52.5vh'
    }
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
    fontFamily: 'Roboto Mono',
    fontSize: '0.8rem'
  }
}))

export default useStyles
