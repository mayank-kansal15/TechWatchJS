'use strict';

import React from 'react';

export default class FormToggleButton extends React.Component{

	render(){
		return(
            	<label className={`btn btn-primary ${this.props.activeClass}`} id={this.props.id} onClick={this.changeHandler.bind(this)}>
                    <input type='radio' name={this.props.buttonName} autoComplete='off' />
                    {this.props.labelName}
                </label>
		)
	}

	changeHandler(e){
		this.props.changeViewHandler(this.props.uid);
	}
}