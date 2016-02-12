import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

export default class FormSearch extends React.Component{
	constructor(props){
		super(props);
	}
	handleChange(){
		var query=this.refs.searchField.value;
		this.props.filterSearch(query);
	}
	render(){
		return(
			<div className="form-group">
			<input type="search" ref="searchField" placeholder={this.props.placeholderText} value={this.props.query} className="search form-control"  onChange={this.handleChange.bind(this)}/>
			</div>
			)
	}
}