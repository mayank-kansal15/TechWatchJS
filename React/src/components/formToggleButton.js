'use strict';

import React from 'react';

export default class FormToggleButton extends React.Component{

	render(){
		return(
            	<label className={`btn btn-primary${this.props.isActive ? ' active' : ''}`} onClick={this.props.changeViewHandler.bind(this, this.props.uid)}>
                    <input type='radio' name={this.props.buttonName} autoComplete='off' />
                    {this.props.labelName}
                </label>
		)
	}
}