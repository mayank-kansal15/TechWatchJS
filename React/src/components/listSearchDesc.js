'use strict';

import React from 'react';

export default class ListSearchDesc extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			desc : false
		}
	}

	render(){
		return(
			<tr>
				<td>
					<input type='checkbox' id='blankCheckboxx' value='option1' aria-label='...' />
				</td>
				<td>
					{this.props.email}
				</td>
				<td>
					<p>
						<a data-toggle='collapse' href='#collapseExample3' onClick={this.expandText.bind(this, this.props.uid)}>
							More
						</a>
					</p>
					{ this.state.desc ? (
						<div className='collapse in' id={'collapseExample' + this.props.uid} >
							<p>
								{this.props.desc}
							</p>
						</div>
					) : null}
				</td>
			</tr>
		)
	}

	expandText(id){
		this.state.desc ? this.setState({desc: false}) : this.setState({desc: true});
	}
}