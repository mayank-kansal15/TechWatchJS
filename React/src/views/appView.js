'use strict';

import React from 'react';
import NavigationHeader from './navbarView.js';
import PanelHeadingView from './panelHeadingView.js';
import GridSearchView from './gridSearchView.js'
import ListSearchView from './listSearchView.js'

export default class AppView extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			query:'',
            view: 'grid',
            data: this.props.demoData.slice(0, 9),
            dataQuantity : 10
		};
	}

	changeDataQuantity(selectedValue){
		this.performSearch(this.state.query, selectedValue);
	}

	performSearch(queryText, selectedValue){
		let completeData = [];
		selectedValue !== undefined && Number(selectedValue) !== NaN ? completeData = this.props.demoData.slice(0, selectedValue - 1) : completeData = this.props.demoData.slice(0, this.state.dataQuantity - 1);
		
		if (selectedValue === 'All'){
			completeData = this.props.demoData.slice(0, this.props.demoData.length -1);
		}

	    let queryResult = [];

	    completeData.map(function(obj){
	    	if(obj.email.indexOf(queryText) != -1){
	    		queryResult.push(obj);
	    	}
	    });

	    this.setState({
	        query: queryText,
	        data: queryResult
	    });

	    if(selectedValue !== undefined && Number(selectedValue)!== NaN){
	    	this.setState({
	    		dataQuantity: selectedValue
	    	});
	    }
	}

	changeView(currentId){
		this.setState({
	    	view: currentId === 'option1' ? 'grid' : 'list'
	    });
	}

	render(){
		let view = this.state.view === 'grid' ? (
			<div className="panel-body grid-view">
                <div className="row">
					<GridSearchView searchData={this.state.data}/>
				</div>
			</div>
		) : (
			<div className="panel-body list-view">
				<ListSearchView searchData={this.state.data} />
			</div>
		);

		return(
			<div className="myApp">
				<NavigationHeader/>
				<div className="container">
					<div className="dashboard">
					    <div className="row">
					        <div className="col-sm-24">
								<div className="panel panel-default">
									<PanelHeadingView
										query={this.state.query}
										dataQuantity={this.state.dataQuantity}
										filterSearch={this.performSearch.bind(this)}
										changeViewHandler={this.changeView.bind(this)}
										changeQuantityHandler={this.changeDataQuantity.bind(this)} />
										{ view }
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
