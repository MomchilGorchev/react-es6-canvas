import React, { Component, PropTypes } from 'react'

export default class Canvas extends Component {

	static propTypes = {
		draw: PropTypes.func
	}

	render() return <canvas id='scene'></canvas>
}