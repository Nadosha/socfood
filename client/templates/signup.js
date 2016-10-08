Template.registration.onRendered(function() {
	
});


Template.registration.events({
	'click #registr-submit': function(event) {
		event.preventDefault();

		var email = $('[name=email]').val();
		var name = $('[name=name').val();
		var password = $('[name=password').val();
		
		Accounts.createUser({
			email: email,
			password: password,
			profile: {
				name: name,
				userImg: '/img/user.jpg'
			}
		}, function(error) {
			if (error) {console.log(error)}
			else {Router.go('home')}
		});
	}
});



Template.login.events({
	'click #login-submit': function(event) {
		event.preventDefault();

		var email = $('[name=email]').val();
		var password = $('[name=password]').val();


		Meteor.loginWithPassword(email, password, function(error) {
			if(error) {console.log(error.reason)}
				else {
					Router.go('home');
				}
		})
	}
})