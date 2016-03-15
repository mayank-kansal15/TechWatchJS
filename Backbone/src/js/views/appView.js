var app = app || {};

(function ($) {
	'use strict';

	app.AppView = Backbone.View.extend({

		el: '.dashboard',

		events: {
			'change select.form-control' : 'filterUsers',
			'change input.form-control' : 'filterUsers',
			'click label.btn' : 'renderView'
		},

		initialize: function () {
				this.$gridData = this.$('.grid-data');
				this.$listData = this.$('.list-data');
				this.$listBody = this.$('.list-data').find('tbody');
				this.render();
		},

		render: function () {
			if (app.users.length) {
				this.$gridData.show();
				this.$gridData.html('');
				this.$listData.hide();
				app.users.first(10).forEach(this.addUser, this);
			} else {
				this.$gridData.hide();
			}
		},

		renderListView: function(){
			if (app.users.length) {
				this.$listData.show();
				this.$gridData.html('');
				this.$listBody.html('');
				app.users.first(10).forEach(this.addListUser, this);
			} else {
				this.$listData.hide();
			}
		},

		filterUsers: function(){
			var userCount = $('select.form-control').val();
			var query = $('input.form-control').val();
			if($('input#option2').closest('label.btn').hasClass('active')){
				this.$listBody.html('');
				app.users.filter(userCount, query).forEach(this.addListUser, this);
			}else{
				this.$gridData.html('');
				app.users.filter(userCount, query).forEach(this.addUser, this);
			}
		},

		renderView: function(evt){
				var viewType = $(evt.target).children().attr('id');
				if(viewType === 'option2'){
					this.renderListView();
				}else{
					this.render();
				}
		},

		addUsers: function () {
			this.$gridData.html('');
			app.users.each(this.addUser, this);
		},

		addUser: function (user) {
			var view = new app.GridView({ model: user });
			this.$gridData.append(view.render().el);
		},

		addListUser: function(user){
			var view = new app.ListView({ model: user });
			this.$listBody.append(view.render().el);
		}
	});
})(jQuery);
