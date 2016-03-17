var app = app || {};

(function () {
	'use strict';

	var Users = Backbone.Collection.extend({

		model: app.User,

		filter: function(dataQuantity, query){
			return this.first(parseInt(dataQuantity)).filter(function(user){
					return user.attributes.email.indexOf(query) != -1
			});
		}
	});

   var userList = new Users();
	 userList.add(app.usersJson);
	 app.users = userList;
})();
