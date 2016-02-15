import React from 'react';
import { render } from 'react-dom'

var optionList = [200,10, 50 , 100, 200, 500, 1000, 2500];
export default class FormSelect extends React.Component{
  changeHandler(event){
    let selectedVal = event.target.value;
    this.props.changeQuantityHandler(selectedVal);
  }
	render(){
		return(
			<div className="form-group">
            <select className="form-control" onChange={this.changeHandler.bind(this)}>
            {optionList.map(function(num){
               return( <option>{num}</option>)
           })}
            </select>
            </div>
            )
	}
}  