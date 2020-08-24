const typography = {
  fontFamily: [
    '"Roboto Mono"',
    'monospace',
    'sans-serif'
  ].join(','),
  h1 = {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    marginBottom: '1.45rem',
    color: inherit,
    fontFamily: [
      '"Fredericka the Great"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeight: 400,
    textRendering: 'optimizeLegibility',
    fontSize: '3rem',
    lineHeight: '1.1',
  },
  // h2 {
  //   margin-left: 0;
  //   margin-right: 0;
  //   margin-top: 0;
  //   padding-bottom: 0;
  //   padding-left: 0;
  //   padding-right: 0;
  //   padding-top: 0;
  //   margin-bottom: 1.45rem;
  //   color: inherit;
  //   font-family: 'Roboto Mono', monospace, Roboto, sans-serif;
  //   font-weight: bold;
  //   text-rendering: optimizeLegibility;
  //   font-size: 1.62671rem;
  //   line-height: 1.1;
  // }
  // h3 {
  //   margin-left: 0;
  //   margin-right: 0;
  //   margin-top: 0;
  //   padding-bottom: 0;
  //   padding-left: 0;
  //   padding-right: 0;
  //   padding-top: 0;
  //   margin-bottom: 1.45rem;
  //   color: inherit;
  //   font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  //   Ubuntu, Cantarell, Fira Sans, Droid Sans, sans-serif;
  //   font-weight: bold;
  //   text-rendering: optimizeLegibility;
  //   font-size: 1.38316rem;
  //   line-height: 1.1;
  // }
  // h4 {
  //   margin-left: 0;
  //   margin-right: 0;
  //   margin-top: 0;
  //   padding-bottom: 0;
  //   padding-left: 0;
  //   padding-right: 0;
  //   padding-top: 0;
  //   margin-bottom: 1.45rem;
  //   color: inherit;
  //   font-family: 'Roboto Mono', monospace, Roboto, sans-serif;
  //   font-weight: bold;
  //   text-rendering: optimizeLegibility;
  //   font-size: 1rem;
  //   line-height: 1.1;
  // }
  // h5 {
  //   margin-left: 0;
  //   margin-right: 0;
  //   margin-top: 0;
  //   padding-bottom: 0;
  //   padding-left: 0;
  //   padding-right: 0;
  //   padding-top: 0;
  //   margin-bottom: 1.45rem;
  //   color: inherit;
  //   font-family: 'Roboto Mono', monospace, Roboto, sans-serif;
  //   font-weight: bold;
  //   text-rendering: optimizeLegibility;
  //   font-size: 0.85028rem;
  //   line-height: 1.1;
  // }
  // h6 {
  //   margin-left: 0;
  //   margin-right: 0;
  //   margin-top: 0;
  //   padding-bottom: 0;
  //   padding-left: 0;
  //   padding-right: 0;
  //   padding-top: 0;
  //   margin-bottom: 1.45rem;
  //   color: inherit;
  //   font-family: 'Roboto Mono', monospace, Roboto, sans-serif;
  //   font-weight: bold;
  //   text-rendering: optimizeLegibility;
  //   font-size: 0.78405rem;
  //   line-height: 1.1;
  // }
  // "headline": {
  //   "color": "rgba(0, 0, 0, 0.87)",
  //   "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
  //   "lineHeight": "1.35417em",
  //   "fontSize": "1.5rem",
  //   "fontWeight": 400
  // },
  // "display2": {
  //   "marginLeft": "-.02em",
  //   "color": "rgba(0, 0, 0, 0.54)",
  //   "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
  //   "lineHeight": "1.13333em",
  //   "fontSize": "2.8125rem",
  //   "fontWeight": 400
  // },
  // "fontWeightLight": 300,
  // "display3": {
  //   "marginLeft": "-.02em",
  //   "color": "rgba(0, 0, 0, 0.54)",
  //   "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
  //   "letterSpacing": "-.02em",
  //   "lineHeight": "1.30357em",
  //   "fontSize": "3.5rem",
  //   "fontWeight": 400
  // },
  // "display4": {
  //   "marginLeft": "-.04em",
  //   "color": "rgba(0, 0, 0, 0.54)",
  //   "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
  //   "letterSpacing": "-.04em",
  //   "lineHeight": "1.14286em",
  //   "fontSize": "7rem",
  //   "fontWeight": 300
  // },
  // "fontWeightRegular": 400,
  // "display1": {
  //   "color": "rgba(0, 0, 0, 0.54)",
  //   "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
  //   "lineHeight": "1.20588em",
  //   "fontSize": "2.125rem",
  //   "fontWeight": 400
  // },
  // "button": {
  //   "textTransform": "uppercase",
  //   "color": "rgba(0, 0, 0, 0.87)",
  //   "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
  //   "fontSize": "0.875rem",
  //   "fontWeight": 500
  // },
  // "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
  // "body2": {
  //   "color": "rgba(0, 0, 0, 0.87)",
  //   "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
  //   "lineHeight": "1.71429em",
  //   "fontSize": "0.875rem",
  //   "fontWeight": 500
  // },
  // "caption": {
  //   "color": "rgba(0, 0, 0, 0.54)",
  //   "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
  //   "lineHeight": "1.375em",
  //   "fontSize": "0.75rem",
  //   "fontWeight": 400
  // },
  // "fontSize": 14,
  // "fontWeightMedium": 500,
  // "title": {
  //   "color": "rgba(0, 0, 0, 0.87)",
  //   "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
  //   "lineHeight": "1.16667em",
  //   "fontSize": "1.3125rem",
  //   "fontWeight": 500
  // },
  // "subheading": {
  //   "color": "rgba(0, 0, 0, 0.87)",
  //   "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
  //   "lineHeight": "1.5em",
  //   "fontSize": "1rem",
  //   "fontWeight": 400
  // },
  // "body1": {
  //   "color": "rgba(0, 0, 0, 0.87)",
  //   "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
  //   "lineHeight": "1.46429em",
  //   "fontSize": "0.875rem",
  //   "fontWeight": 400
  // }
}

export default typography
