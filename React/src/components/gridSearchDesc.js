import React from 'react';
import { render } from 'react-dom'

export default class GridSearchDesc extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			desc : false
		}
	}
	expandText(id){
		console.log("collapseExample" + id);
		var currentElement = document.getElementById("collapseExample" + id);
		this.state.desc ? this.setState({desc: false}) : this.setState({desc: true});
	}
	render(){
		var view;
		if(this.state.desc){
			view = <div className="collapse in" id={"collapseExample" + this.props.uid} >
	                        <p>
	                            {this.props.desc}
	                        </p>
	                    </div>
		}else{
			view = undefined;
		}
		return(
				<div className="caption">
	                <h3>{this.props.title}</h3>
	                <div>
	                    <p>
	                        <a role="button" data-toggle="collapse" data-id={"#collapseExample" + this.props.uid} onClick={this.expandText.bind(this, this.props.uid)}>
	                            More
	                        </a>
	                    </p>
	                    {view}
	                    <div><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></div>
	                </div>
	            </div>
		)
	}
}