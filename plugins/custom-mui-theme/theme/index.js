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
