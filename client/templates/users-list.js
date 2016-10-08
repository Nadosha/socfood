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
		var friendsParticipants = Meteor.conversations.find({_participants: currentUser}).map(function(convers){
			var participants = convers.participants().map(function(result) {
				return result.user();
			});
			if (participants.length >= 1) {
				var eachParticipant;
				participants.forEach(function(a) {
					eachParticipant = a;
				});
			}
			var lastMessage = convers.lastMessage();
			if(lastMessage) {
				var mesFormat = urlify(lastMessage.body);
				var mesDate = lastMessage.date;
			} 
			var pack = {
					friend: eachParticipant,
					lastMessage: mesFormat,
					date: mesDate
				}
				console.log(pack);
			return pack;

		});
		return friendsParticipants.sort(function(a , b) {
			return new Date(b.date) - new Date(a.date);
		});
	}
});

Template.usersList.events({
	'click #addUser': function() {
		Modal.show('modalUsers'); //settings and views in /client/modal dir
	},
	'click [name=participant]': function(event, template) {
		event.preventDefault();

		var userId = this.friend._id;
		var user = Meteor.users.findOne({_id:userId});
		var participants = [userId];

		Meteor.user().findExistingConversationWithUsers(participants, function(error, result){
    	    if(result){
				conversationId = result;
				Router.go('/' + conversationId)

    	    } else {
				var conversation = new Conversation().save();
				conversation.addParticipant(user);
				Router.go('/' + conversation._id);
			}
    
		});
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