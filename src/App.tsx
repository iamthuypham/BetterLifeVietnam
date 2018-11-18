import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme/MuiTheme';
import StandardButton from './components/shared/StandardButton';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <StandardButton><span>Children</span></StandardButton>
      </MuiThemeProvider>
    );
  }
}

export default App;
