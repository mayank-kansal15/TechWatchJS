'use strict';

import React from 'react';
import NavigationHeader from './navbarView.js';
import GridSearchView from './gridSearchView.js'
import ListSearchView from './listSearchView.js'
import NavbarForm from '../components/navbarForm'
import DataViewModel from '../models/dataViewModel'
import { Link } from 'react-router'

export default class DataView extends React.Component{

	constructor(props){
		super(props);

		this.models = [ DataViewModel ];
		this.state = Object.assign(this.getModelState(),{
			view: 'grid'
		});
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
			showImages: DataViewModel.getShowImages()
		};
	}

	onDataQuantityChange(dataQuantity){
		DataViewModel.setDataQuantity(dataQuantity);
	}

	onFilterTextChange(query){
		DataViewModel.setQuery(query);
	}

	changeView(view){
		this.setState({ view });
	}

	onImageVisibilityChange(canShow){
		DataViewModel.setShowImages(canShow);
	}

	render(){
		let view = (
			<div className="panel-body grid-view">
				<div className="row">
					{this.state.view === 'grid' ? <GridSearchView /> : <ListSearchView />}
				</div>
			</div>
		)

		return(
			<div className="container">
				<div className="dashboard">
					<div className="row">
						<div className="col-sm-24">
							<div className="panel panel-default">
								<div className="panel-heading">
									<ul className="list-inline clearfix">
										<li>
											<NavbarForm
												query={this.state.query}
												dataQuantity={this.state.dataQuantity}
												view={this.state.view}
												showImages={this.state.showImages}
												filterSearch={this.onFilterTextChange.bind(this)}
												changeViewHandler={this.changeView.bind(this)}
												changeQuantityHandler={this.onDataQuantityChange.bind(this)}
												onImageVisibilityChange={this.onImageVisibilityChange.bind(this)} />
										</li>
									</ul>
								</div>
								{ view }
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
