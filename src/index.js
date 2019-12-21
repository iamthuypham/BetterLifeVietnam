import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import App from './components/App.js'

import './css/index.css'

const theme = createMuiTheme({
  palette: {
    secondary: { main: '#FF8E3A' }
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
