import { createMuiTheme } from '@material-ui/core/styles'
import typography from './typography'

const palette = {
  primary: { main: '#DAA520' },
  error: { main: '#D81B60' },
  secondary: { main: '#4CAF50' },
  textPrimary: { main: '#000' }
}

const overrides = {
  MuiButton: {
    text: {
      fontFamily: "'Roboto Mono', monospace, sans-serif"
    },
    contained: {
      boxShadow: 'none'
    }
  },
  MuiFormLabel: {
    root: {
      fontSize: '0.7rem'
    }
  },
  PrivateNotchedOutline: {
    legendLabelled: {
      fontSize: '0.55rem'
    }
  },
  MuiTypography: {
    caption: {
      fontSize: '0.6rem'
    },
    body1: {
      '@media (max-width: 480px)': {
        fontSize: '0.9rem'
      }
    },
    h6: {
      '@media (max-width: 960px)': {
        marginBottom: 0
      }
    }
  },
  MuiTab: {
    root: {
      '@media (min-width: 600px)': {
        minWidth: '60px'
      },
      '@media (min-width: 960px)': {
        minWidth: '120px'
      },
      minWidth: '40px'
    },
  },
  MuiMenu: {
    paper: {
      boxShadow: 'none',
      borderRadius: 0,
      color: 'white',
      backgroundColor: 'black',
    }
  },
  MuiMenuItem: {
    root: {
      justifyContent: 'flex-start'
    }
  }
}

const themeName = 'Legend Julia Parliament Origami'

export default createMuiTheme({ palette, themeName, typography, overrides })
