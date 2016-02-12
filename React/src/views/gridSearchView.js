import React from 'react';
import { render } from 'react-dom'
import GridSearchImage from '../components/gridSearchImage'
import GridSearchDesc from '../components/gridSearchDesc'

export default class GridSearchView extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		var searchData = this.props.searchData;
		return(
			<div>
			{searchData.map(function(obj, i){
            		return (
            			<div className="col-sm-12 col-md-8">
							<div className="thumbnail">
								<GridSearchImage key={obj.id} imageSrc={obj.imgSrc}/>
								<GridSearchDesc key={i} uid={obj.id} title={obj.email} desc={obj.details}/>
							</div>
						</div>
            		)
				})
			}
			</div>
		)
	}
}





