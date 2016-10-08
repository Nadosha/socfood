Template.modalUsers.helpers({
	'enemyUsers': function() {
		//var currentUser = Meteor.userId();
		//var friendsId = Meteor.friends.find({userId: currentUser}).map(function(friend) {
		//	return friend.friendId;
		//});
		//console.log(friendId)
		//var sentRequests = Meteor.requests.find({requesterId: currentUser}).map(function(requester) {
		//	return requester.userId;
		//});
		//var resivedRequests = Meteor.requests.find({userId: currentUser}).map(function(requester) {
		//	return requester.requesterId;
		//});
		//var result =  Meteor.users.find({_id: {$nin: friendsId.concat(currentUser, sentRequests.concat(resivedRequests))} });
		return Meteor.users.find();
	}
});

Template.modalUsers.events({
	'click #addToFriends': function(event) {
		event.preventDefault();
		this.requestFriendship();
		console.log(this)
	}
});