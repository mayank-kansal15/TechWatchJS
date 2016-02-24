'use strict';

import React from 'react';
import FormSearch from './formSearch'
import FormToggleButton from './formToggleButton'
import FormSelect from './formSelect'

const toggleButtonProperties = [
	{
		activeClass: 'active',
		buttonName : 'options',
		uid : 'option1',
		labelName :'grid'
	},
	{
		activeClass:'',
		buttonName : 'options',
		uid : 'option2',
		labelName: 'list'
	}
]

export default class NavbarForm extends React.Component{
	
	render(){
		return(
			<div className='navbar-form'>
				<FormSelect
					dataQuantity={this.props.dataQuantity}
					changeQuantityHandler={this.props.changeQuantityHandler}/>
	            <FormSearch placeholderText='search' query={this.props.query} filterSearch={this.props.filterSearch} />
				<div className='btn-group' data-toggle='buttons'>
					{toggleButtonProperties.map((obj, i) => <FormToggleButton
																key={i}
																activeClass={obj.activeClass}
																buttonName={obj.buttonName}
																uid={obj.uid}
																labelName={obj.labelName}
																changeViewHandler={this.props.changeViewHandler.bind(this)} />
	            	)}
				</div>
			</div>
		)
	}
}