import React from 'react';
import { render } from 'react-dom'

var optionList = [1, 2 , 3, 4, 5, 6, 7 ,8 ,9];
export default class FormSelect extends React.Component{
	render(){
		return(
			<div className="form-group">
            <select className="form-control">
            {optionList.map(function(num){
               return( <option>{num}</option>)
           })}
            </select>
            </div>
            )
	}
}  