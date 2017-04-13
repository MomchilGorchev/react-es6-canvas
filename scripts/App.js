import React, { Component } from 'react';
import { drawOnCanvas} from './canvas/draw'

export default class App extends Component {

  componentWillMount() {

  }

  componentDidMount(){
    const canvas = document.getElementById('scene')
    drawOnCanvas(canvas, window)
  }


  render() {
    return <div>
      <h1>React + Canvas</h1>
      <canvas id='scene'></canvas>
    </div>
  }
}
