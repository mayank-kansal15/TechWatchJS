'use strict';

import React from 'react';

export default class FormSearch extends React.Component {
	render() {
		return (
					<div className='form-group'>
						<input
							type='search'
							ref='searchField'
							placeholder={this.props.placeholderText}
							value={this.props.query}
							className='search form-control'
							onChange={this.handleChange.bind(this)} />
					</div>
				)
	}

	handleChange(){
		let query = this.refs.searchField.value;
		this.props.filterSearch(query);
	}
}