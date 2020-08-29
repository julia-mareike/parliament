import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
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
    padding: `6rem 1rem 3rem 1rem`
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
    textAlign: 'center',
    marginTop: '5px',
    '&:hover': {
      cursor: 'pointer'
    },
    '&:hover $svg $g': {
      fill: 'goldenrod'
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: '10px'
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
    },
    [theme.breakpoints.down('sm')]: {
      maxHeight: '60vh',
      maxWidth: '45vh'
    }
  },
  pollTab: {
    '@media (min-width: 960px)': {
      minWidth: '200px'
    },
  },
  calculatorInstructions: {
    fontSize: '0.9rem',
    '@media (min-width: 480px)': {
      fontSize: '0.8rem'
    },
  },
  votesAllocated: {
    border: '1px solid',
    borderRadius: '4px',
    padding: '5px 15px'
  },
  hideMob: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      lineHeight: '0'
    }
  },
  hideDesktop: {
    padding: 0,
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
    fontSize: '0.7rem'
  }
}))
