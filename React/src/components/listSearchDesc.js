'use strict';

import React from 'react';
import Image from './image'

export default class ListSearchshowDesc extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showDesc : false
		}
	}

	render(){
		return(
			<tr>
				<td>
					{ this.props.showImages ? <Image height={30} width={30}/> : null }
				</td>
				<td>
					{this.props.data.email}
				</td>
				<td>
					<p>
						<a data-toggle='collapse' onClick={this.expandText.bind(this)}>
							{ this.state.showDesc ? 'Less' : 'More'}
						</a>
					</p>
					{ this.state.showDesc ? (
						<div className='collapse in'>
							<p>{this.props.data.details}</p>
						</div>
					) : null}
				</td>
			</tr>
		)
	}

	expandText(){
		this.setState({
			showDesc: !this.state.showDesc
		});
	}
}