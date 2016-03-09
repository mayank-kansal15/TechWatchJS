'use strict';

import React from 'react';
import NavbarView from './navbarView';

export default class AppView extends React.Component{

	render(){
		return(
			<div className="myApp">
				<NavbarView/>
				{this.props.children}
			</div>
		);
	}
}
