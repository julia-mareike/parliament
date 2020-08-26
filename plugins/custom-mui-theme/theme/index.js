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
