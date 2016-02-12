import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import FormSearch from './formSearch'
import FormToggleButton from './formToggleButton'
import FormSelect from './formSelect'
var toggleButtonProperties = [
	{"activeClass":"active", "buttonName" : "options", "uid" : "option1", "labelName" :"grid"},
	{"activeClass":"", "buttonName" : "options", "uid" : "option2", "labelName" : "list"}
]

export default class NavbarForm extends React.Component{
	render(){
		let self = this;
		return(
			<div className="navbar-form">
			<FormSelect />
            <FormSearch placeholderText="search" query={this.props.query} filterSearch={this.props.filterSearch}/>
			<div className="btn-group" data-toggle="buttons">
				{toggleButtonProperties.map(function(obj, i){
            		return (
            			<FormToggleButton key={i} activeClass={obj.activeClass} buttonName={obj.buttonName} uid={obj.uid} labelName={obj.labelName} changeViewHandler={self.props.changeViewHandler}/>
            		)
            	})
			}
			</div>
			</div>
		)
	}
}