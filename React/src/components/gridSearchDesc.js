'use strict';

import React from 'react';

export default class GridSearchDesc extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			showDesc : false
		}
	}

	render(){
		return(
				<div className='caption'>
					<h3>{this.props.title}</h3>
					<div>
						<p>
							<a role='button' onClick={this.expandText.bind(this)}>
								{ this.state.showDesc ? 'Less' : 'More'}
							</a>
						</p>
						{ this.state.showDesc ? (
							<div className='collapse in'>
								<p>
									{this.props.desc}
								</p>
							</div>
						): null }
					</div>
				</div>
		)
	}

	expandText(){
		this.setState({
			showDesc: !this.state.showDesc
		});
	}
}