'use strict';

import React from 'react';
import GridSearchImage from '../components/gridSearchImage'
import GridSearchDesc from '../components/gridSearchDesc'

export default class GridSearchView extends React.Component{
	
	render(){
		return(
			<div>
				{this.props.searchData.map((obj, i) => (
        			<div className="col-sm-12 col-md-8">
						<div className="thumbnail">
							<GridSearchImage key={obj.id} imageSrc={obj.imgSrc}/>
							<GridSearchDesc key={i} uid={obj.id} title={obj.email} desc={obj.details}/>
						</div>
					</div>
        		))}
			</div>
		)
	}
}