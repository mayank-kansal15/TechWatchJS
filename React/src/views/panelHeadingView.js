'use strict';

import React from 'react';
import NavbarForm from '../components/navbarForm'

export default class PanelHeadingView extends React.Component{

	render(){
		return(
			<div className="panel-heading">
                <ul className="list-inline clearfix">
	                <li>
	                	<NavbarForm {...this.props} />
	                </li>
                </ul>
            </div>
		);
	}
}