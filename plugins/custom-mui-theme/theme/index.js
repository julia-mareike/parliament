import { createMuiTheme } from '@material-ui/core/styles'
import typography from './typography'

const palette = {
  primary: { main: '#f50057' },
  secondary: { main: '#D81B60' }
}

const overrides = {
  // MuiButton: {
  //   // Name of the rule
  //   text: {
  //     // Some CSS
  //     backgroundColor: 'goldenrod',
  //     borderRadius: 3,
  //     fontSize: 30,
  //     border: 0,
  //     color: 'red',
  //     height: 100,
  //     padding: '0 30px',
  //     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  //   }
  // }
}

const themeName = 'Legend Julia Parliament Origami'

export default createMuiTheme({ palette, themeName, typography, overrides })
