'use strict';

import React from 'react';

export default class ListSearchHead extends React.Component{
	
	render(){
		return(
			<thead>
				<tr>
					<th style={{width: '45px'}}>Thumbnails</th>
					<th className='title'>Title</th>
					<th>Description</th>
				</tr>
			</thead>
		)
	}
}