Template.appPage.helpers({
	'userTest': function() {
		var user = Meteor.user();
		return user;
	}
});


Template.appPage.events({
	'click #logout': function(event) {
		event.preventDefault();
		Meteor.logout();
	}
});