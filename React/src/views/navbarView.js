import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import NavigationItem from '../components/navigationItem'

var navigationProps = [
	{"route" : "index.html", "routeName" : "Home"},
	{"route" : "about", "routeName" : "About"},
	{"route" : "contact", "routeName" : "Contact"}
]

export default class NavigationHeader extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<nav className="navbar navbar-inverse">
			    <div className="container">
			        <div className="navbar-header">
			        <div id="navbar" className="navbar-collapse collapse">
			            <ul className="nav navbar-nav">
			            	{navigationProps.map(function(obj, i){
			            		return (
			            			<NavigationItem key={i} route={obj.route} routeName={obj.routeName} />
			            		)
			            	})}
			            </ul>
			        </div>
			        </div>
			    </div>
			</nav>
		);
	}
}
