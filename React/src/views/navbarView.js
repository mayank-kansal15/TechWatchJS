'use strict';

import React from 'react';
import NavigationItem from '../components/navigationItem'
import RouteInfo from '../routeInfo';

export default class NavbarView extends React.Component{

	render(){
		return(
			<nav className="navbar navbar-inverse">
				<div className="container">
					<div className="navbar-header">
						<div id="navbar" className="navbar-collapse collapse">
							<ul className="nav navbar-nav">
								{ Object.keys(RouteInfo).map((key, i) => <NavigationItem key={key} route={RouteInfo[key]} routeName={key} /> )}
							</ul>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}