Template.usersList.helpers({
	'friendshipRequest': function() {
		var currentUser = Meteor.userId();
		var sentRequests = Meteor.requests.find({requesterId: currentUser}).map(function(requester) {
			return requester.userId;
		});
		var resivedRequests = Meteor.requests.find({userId: currentUser}).map(function(requester) {
			return requester.requesterId;
		});
		var result = Meteor.users.find({_id: {$in: sentRequests.concat(resivedRequests)}});
		return result;
	},
	'userFriends': function() {

	}
});

Template.usersList.events({
	'click #addUser': function() {
		Modal.show('modalUsers'); //settings and views in /client/modal dir
	}
});
