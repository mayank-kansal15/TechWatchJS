'use strict';

import React from 'react';

export default class GridSearchImage extends React.Component{
	
	render(){
		return (
			<img
				alt='100%x200'
				src={`${this.props.imageSrc}?random${Math.random()}`}
				data-holder-rendered={true}
				style={{ height: '200px', width: '100%', display: 'block' }} />
		)
	}
}