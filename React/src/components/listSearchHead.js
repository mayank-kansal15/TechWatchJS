'use strict';

import React from 'react';

export default class ListSearchHead extends React.Component{
	
	render(){
		return(
			<thead>
				<tr>
					<th><input type='checkbox' id='blankCheckbox' value='option1' aria-label='...' /></th>
					<th className='title'>Title</th>
					<th>Description</th>
				</tr>
			</thead>
		)
	}
}