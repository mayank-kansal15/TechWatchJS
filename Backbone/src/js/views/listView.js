var app = app || {};

(function ($) {
	'use strict';

	app.ListView = Backbone.View.extend({

		tagName: 'tr',

		template: _.template($('#list-item-template').html()),

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
})(jQuery);
