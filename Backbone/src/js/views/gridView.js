var app = app || {};

(function ($) {
	'use strict';

	app.GridView = Backbone.View.extend({

		tagName: 'div',

		template: _.template($('#grid-item-template').html()),

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
})(jQuery);
