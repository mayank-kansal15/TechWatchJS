var app = app || {};

(function () {
	'use strict';

	var Router = Backbone.Router.extend({
		routes: {
			'*filter': 'appView'
		},

		appView: function(){
			console.log('dunno');
		}

	});

	app.Router = new Router();
	Backbone.history.start();
})();
