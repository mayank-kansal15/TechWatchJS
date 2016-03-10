'use strict';

import React from 'react';
import FormSearch from './formSearch'
import FormToggleButton from './formToggleButton'
import FormSelect from './formSelect'

const toggleButtonProperties = [
	{
		activeClass: 'active',
		buttonName : 'options',
		uid : 'grid',
		labelName :'Grid'
	},
	{
		activeClass:'',
		buttonName : 'options',
		uid : 'list',
		labelName: 'List'
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
																isActive={obj.uid === this.props.view}
																buttonName={obj.buttonName}
																uid={obj.uid}
																labelName={obj.labelName}
																changeViewHandler={this.props.changeViewHandler.bind(this)} />
					)}
				</div>

				<div className='btn-group' data-toggle='buttons'>
					<label className={`btn btn-primary${this.props.showImages ? ' active': ''}`}>
						<input type='checkbox' checked={this.props.showImages} onChange={this.onImageVisibilityChange.bind(this)} />{this.props.showImages ? 'Hide Images': 'Show Images'}
					</label>
				</div>


				
			</div>
		)
	}

	onImageVisibilityChange(e){
		this.props.onImageVisibilityChange(e.target.checked);
	}
}