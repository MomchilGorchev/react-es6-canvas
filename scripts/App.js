import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Canvas from './Canvas'
import { drawOnCanvas } from './canvas/draw'

export default class App extends Component {


  render() {
    return <div>
        <MuiThemeProvider>
            <AppBar
                title="React + Canvas"
            />
        </MuiThemeProvider>
        <Canvas draw={ drawOnCanvas } />
    </div>
  }
}
