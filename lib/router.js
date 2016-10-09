Router.route('/', {
	name: 'home',
	template: 'appPage',
	onBeforeAction: function() {
		var currentUser = Meteor.userId();
		if(currentUser) {
			this.next();
		} else {
			Router.go('login');
		}
	}
});

Router.route('/registration', {
	name: 'registration',
	template: 'registration',
	layoutTemplate: 'signUp',

});

Router.route('/login', {
	name: 'login',
	template: 'login',
	layoutTemplate: 'signUp'
});

Router.route('/:conversationId', {
	name: 'conversation',
	template: 'messageHistory',
	onBeforeAction: function() {
		var currentUser = Meteor.userId();
		if(currentUser) {
			this.next();
		} else {
			Router.go('login');
		}
	}
});

Router.configure({
	layoutTemplate: 'mainLayout'
});
