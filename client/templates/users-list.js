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
		var currentUser = Meteor.userId();
		var friendsId = Meteor.friends.find({userId: currentUser}).map(function(friend) {
			return friend.friendId;
		});
		return Meteor.users.find({_id: {$in: friendsId} });
	}
});

Template.usersList.events({
	'click #addUser': function() {
		Modal.show('modalUsers'); //settings and views in /client/modal dir
	}
});


Template.requestsList.events({
	'click #acceptRequest': function() {
		this.acceptFriendshipRequest();
	},
	'click #denyRequest': function() {
		var request = Meteor.requests.findOne({requesterId:this._id, userId:Meteor.userId()});
        request && request.cancel();
	}
});