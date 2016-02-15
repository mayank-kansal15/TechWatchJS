import React from 'react';
import { render } from 'react-dom'
var imageStyles = {
	height: '200px', width: '100%', display: 'block'
}
export default class GridSearchImage extends React.Component{
	render(){
		return(
			<img alt="100%x200" src={this.props.imageSrc + '?random' + Math.random()} data-holder-rendered="true" style={imageStyles}/>
		)
	}
}