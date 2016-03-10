'use strict';

import React from 'react';

export default class Image extends React.Component{
	
	render(){
		return (
			<img
				src={`http://lorempixel.com/${this.props.width}/${this.props.height}/?random0.2853862527691229?random${Math.random()}`}
				data-holder-rendered={true}
				style={{ height: `${this.props.height}px`, width: `${this.props.width}px`, display: 'block' }} />
		)
	}
}