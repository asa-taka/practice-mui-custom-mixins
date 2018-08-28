import * as React from 'react'

import { MuiThemeProvider } from '@material-ui/core/styles'

import theme from './theme'

import MyButton from './components/MyButton'

class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <MyButton name="MyButton with my Mixin!" />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
