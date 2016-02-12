import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'


export default class NavigationItem extends React.Component{
	render(){
		return(
			<li className={this.props.activeClass}><Link to={"/" + this.props.route}>{this.props.routeName	}</Link></li>
		);
	}	
}
