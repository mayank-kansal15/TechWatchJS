import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import NavbarForm from '../components/navbarForm'

export default class PanelHeadingView extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="panel-heading">
                <ul className="list-inline clearfix">
                <li>
                <NavbarForm query={this.props.query} filterSearch={this.props.filterSearch} changeViewHandler={this.props.changeViewHandler}/>
                </li>
                </ul>
            </div>
		)
	}
}