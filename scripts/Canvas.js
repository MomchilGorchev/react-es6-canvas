import React, { Component, PropTypes } from 'react'

export default class Canvas extends Component {

	static propTypes = {
		draw: PropTypes.func
	}

	componentDidMount(){
		const { draw } = this.props
		const canvas = document.getElementById('scene')
		draw(canvas, window)
	}


	render() {
		return <canvas id='scene'></canvas>
	}
}
