import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

export default class FormToggleButton extends React.Component{
	changeHandler(e){
		this.props.changeViewHandler(this.props.uid);
	}
	render(){
		return(
            	<label className={"btn btn-primary " + this.props.activeClass} id={this.props.id} onClick={this.changeHandler.bind(this)}>
                    <input type="radio" name={this.props.buttonName}  autoComplete="off" checked="" />
                    {this.props.labelName}
                </label>

		)
	}
}