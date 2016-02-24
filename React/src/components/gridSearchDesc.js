'use strict';

import React from 'react';

export default class GridSearchDesc extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			desc : false
		}
	}

	render(){
		return(
				<div className='caption'>
	                <h3>{this.props.title}</h3>
	                <div>
	                    <p>
	                        <a role='button' data-toggle='collapse' data-id={'#collapseExample' + this.props.uid} onClick={this.expandText.bind(this, this.props.uid)}>
	                            More
	                        </a>
	                    </p>
	                    { this.state.desc ? (
							<div className='collapse in' id={'collapseExample' + this.props.uid} >
				                <p>
				                    {this.props.desc}
				                </p>
				            </div>
						): null }
	                    <div>
	                    	<a href='#' className='btn btn-primary' role='button'>Button</a> <a href='#' className='btn btn-default' role='button'>Button</a>
                    	</div>
	                </div>
	            </div>
		)
	}

	expandText(id){
		let currentElement = document.getElementById('collapseExample' + id);
		this.state.desc ? this.setState({desc: false}) : this.setState({desc: true});
	}
}