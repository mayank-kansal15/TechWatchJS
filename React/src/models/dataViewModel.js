'use strict';

import BaseModel from './baseModel';

const sampleData = require('../assets/json/data.json');

let data = null;
let dataQuantity = 10;
let query = '';

let performSearch = () => {
	return sampleData.slice(0, dataQuantity - 1).filter(d => d.email.indexOf(query) > -1);
}

export default BaseModel({

	getData: function() {
		return performSearch();
	},

	getDataQuantity: function() {
		return dataQuantity;
	},

	setDataQuantity: function(value) {
		dataQuantity = value;
		this.notify();
	},

	getQuery: function() {
		return query;
	},

	setQuery: function(value) {
		query = value;
		this.notify();
	}
})