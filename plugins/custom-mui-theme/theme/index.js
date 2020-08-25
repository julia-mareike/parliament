import { createMuiTheme } from '@material-ui/core/styles'
import typography from './typography'

const palette = {
  primary: { main: '#DAA520' },
  secondary: { main: '#D81B60' }
}

const overrides = {
  MuiButton: {
    // Name of the rule
    text: {
      // Some CSS
      fontFamily: "'Roboto Mono', monospace, sans-serif"
    }
  }
}

const themeName = 'Legend Julia Parliament Origami'

export default createMuiTheme({ palette, themeName, typography, overrides })
