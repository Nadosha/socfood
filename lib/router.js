Router.route('/', {
	name: 'home',
	template: 'appPage',
	onBeforeAction: function() {
		var currentUser = Meteor.userId();
		if(currentUser) {
			this.next();
		} else {
			Router.go('registration');
		}
	}
});

Router.route('/registration', {
	name: 'registration',
	template: 'registration',
	layoutTemplate: 'signUp'
});

Router.route('/login', {
	name: 'login',
	template: 'login',
	layoutTemplate: 'signUp'
});

Router.configure({
	layoutTemplate: 'mainLayout'
});