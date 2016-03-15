var app = app || {};

(function () {

	app.User = Backbone.Model.extend({
		defaults: {
			id: '',
			email: '',
			details: '',
			imgSrc: ''
		}
	});
})();
