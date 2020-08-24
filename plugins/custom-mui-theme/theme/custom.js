import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    button: {
      fontFamily: "\"Roboto Mono\", monospace, sans-serif"
    }
  },
  primary: {
    color: 'goldenrod'
  },
  layout: {
    margin: `0 auto`,
    maxWidth: '70vw',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90vw',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100vw'
    },
    minHeight: '100vh',
    padding: `9rem 1.0875rem 0 1.0875rem`,    
  },
  header: {
    background: `#ffffff`,
    position: 'fixed',
    top: '0',
    zIndex: '10',
    width: '100vw',
  },
  headerWrap: {
    margin: `0 auto`,
    padding: `1rem 1rem 0 1rem`,
    maxWidth: '70vw',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90vw',
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
    width: '100vw',    
  },
  footerWrap: {
    margin: `0 auto`,
    padding: `1rem 1rem 1rem 1rem`,
    maxWidth: '70vw',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90vw',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100vw'
    },
  },
  headerContainer: {
    height: '1rem',
    borderBottom: 'solid #f50057 1px'
  }
}))

export default useStyles
