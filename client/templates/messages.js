Template.messageHistory.helpers({
	'isHomePage': function() {
		var currentRout = Router.current().params.conversationId;
		console.log(currentRout)
		if (currentRout !== undefined) {
			return false
		} else {
			return true
		};
	},
	'displayMessages': function() {
		var currentRout = Router.current().params.conversationId;
		var findMessages = Meteor.messages.find({conversationId:currentRout}).fetch();
		var message = findMessages.map(function(item) {
			var text = urlify(item.body);


			return {
				text: text,
				user: item.user(),
				whoIs: function() {
					let participant = item.user()._id;
					let user = Meteor.userId();
					if(user === participant) {
						return 'me';
					} else {
						return 'you';
					}
				},
				date: item.date
			}
		});

		return message;
	},
	'interlocator': function() {
		var conversationId = Router.current().params.conversationId;
    	var findConver = Meteor.conversations.findOne(conversationId);
    	var participant = [];
    	if (findConver) {
    		findConver._participants.map(function(item) {
    			let currentUser = Meteor.userId();
    			if(currentUser !== item) {
    				Meteor.users.find(item).fetch().map(function(user){
    					participant.push(user.profile);
    				});
    			}   	
     		});
     	}

    	return participant;
	}
});