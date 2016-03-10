'use strict';

import React from 'react';
import RouteInfo from '../routeInfo';

export default class HomeView extends React.Component{

	render(){
		return(
			<div className='container'>
			   <div className='col-sm-6'>
			       <a className='well center-block' href={`#${RouteInfo.Data}`}>Test 1</a>
			   </div>
			</div>
		);
	}
}
