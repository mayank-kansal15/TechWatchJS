import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import NavigationHeader from './navbarView.js';
import PanelHeadingView from './panelHeadingView.js';
import GridSearchView from './gridSearchView.js'
import ListSearchView from './listSearchView.js'
export default class AppView extends React.Component{
	constructor(props){
		super(props);
		this.performSearch = this.performSearch.bind(this);
		this.changeView = this.changeView.bind(this);
		this.changeDataQuantity = this.changeDataQuantity.bind(this);
		this.state = {
			query:'',
            view: 'grid',
            data: this.props.demoData.slice(0, 199),
            dataQuantity : 200
		}
	}
	changeDataQuantity(selectedValue){
		this.performSearch(this.state.query, selectedValue);

	}
	performSearch(queryText, selectedValue){
		let completeData = [];
		selectedValue !== undefined && Number(selectedValue) !== NaN ? completeData=this.props.demoData.slice(0, selectedValue-1) : completeData=this.props.demoData.slice(0, this.state.dataQuantity -1);
		if(selectedValue === 'All'){
			completeData=this.props.demoData.slice(0, this.props.demoData.length -1);
		}
		console.log(queryText);
		console.log(selectedValue);
	    //get query result
	    this.setState({
	    	query: queryText
	    })

	    var queryResult = [];
	    completeData.map(function(obj){
	    	if(obj.email.indexOf(queryText) != -1){
	    		queryResult.push(obj);
	    	}
	    })
	    this.setState({
	        query:queryText,
	        data: queryResult
	    })
	    if(selectedValue !== undefined && Number(selectedValue)!==NaN){
	    	this.setState({
	    		dataQuantity: selectedValue
	    	});
	    }
	}
	changeView(currentId){
		console.log('view changed');
		if(currentId === 'option1'){
			this.setState({
		    	view: 'grid'
		    })
		}else if(currentId === 'option2'){
			this.setState({
		    	view: 'list'
		    })
		}
	}
	render(){
		var view;
		if(this.state.view === 'grid'){
			view =  <div className="panel-body grid-view">
		                <div className="row">
							<GridSearchView searchData={this.state.data}/>
						</div>
					</div>	
		}else if(this.state.view === 'list'){
			view =	<div className="panel-body list-view">
						<ListSearchView searchData={this.state.data}/>
					</div>
		}	
		return(
			<div className="myApp">
			<NavigationHeader/>
				<div className="container">
				<div className="dashboard">
				    <div className="row">
				        <div className="col-sm-24">
						<div className="panel panel-default">
							<PanelHeadingView query={this.state.query} filterSearch={this.performSearch} changeViewHandler={this.changeView} changeQuantityHandler={this.changeDataQuantity}/>
								{view}
						</div>
					</div>
				</div>
				</div>
				</div>
			</div>
		);
	}
}
