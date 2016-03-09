'use strict';

import React from 'react';

const optionList = [10, 50 , 100, 200, 500, 1000, 2500];

export default class FormSelect extends React.Component{
	
	render(){
		return (
			<div className="form-group">
				<select className="form-control" onChange={this.changeHandler.bind(this)} defaultValue={this.props.dataQuantity}>
					{ optionList.map(num => <option key={num}>{num}</option> )}
				</select>
			</div>
		)
	}

	changeHandler(event){
		let selectedVal = event.target.value;
		this.props.changeQuantityHandler(selectedVal);
	}
}