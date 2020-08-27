import { createMuiTheme } from '@material-ui/core/styles'
import typography from './typography'

const palette = {
  primary: { main: '#DAA520' },
  secondary: { main: '#D81B60' }
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
      },
    }
  },
  MuiTab: {
    root: {
      '@media (min-width: 600px)': {
        minWidth: '100px'
      },
      '@media (min-width: 960px)': {
        minWidth: '120px'
      },
      minWidth: '48px'
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
