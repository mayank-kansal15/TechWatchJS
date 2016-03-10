'use strict';

import React from 'react';
import ListSearchHead from '../components/listSearchHead'
import ListSearchDesc from '../components/listSearchDesc'
import DataViewModel from '../models/dataViewModel'

export default class ListSearchView extends React.Component{

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
		return (
			<div className="col-sm-24">
				<table className="table table-striped">
				<ListSearchHead />
					<tbody>
						{
							this.state.filterData.map((obj, i) => <ListSearchDesc key={obj.id} uid={obj.id} data={obj} showImages={this.state.showImages}/> )
						}
					</tbody>
				</table>
			</div>
		)
	}
}