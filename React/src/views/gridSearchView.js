'use strict';

import React from 'react';
import Image from '../components/image'
import GridSearchDesc from '../components/gridSearchDesc'
import DataViewModel from '../models/dataViewModel'

export default class GridSearchView extends React.Component{
	
	constructor(props){
		super(props);

		this.models = [ DataViewModel ];
		this.state = this.getModelState();
	}

	componentDidMount() {
		this.models.forEach(model => model.onChange(this.onModelChange, this));
	}

	componentWillUnmount() {
		this.models.forEach(model => model.offChange(this.onModelChange));
	}

	onModelChange() {
		this.setState(this.getModelState());
	}

	getModelState() {
		return { 
			filterData: DataViewModel.getData(),
			showImages: DataViewModel.getShowImages()
		};
	}

	render(){
		return(
			<div>
				{this.state.filterData.map((obj, i) => (
					<div className="col-sm-12 col-md-8" key={obj.id} >
						<div className="thumbnail">
							{ this.state.showImages ? <Image height={200} width={300}/> : null }
							<GridSearchDesc uid={obj.id} title={obj.email} desc={obj.details}/>
						</div>
					</div>
				))}
			</div>
		)
	}
}