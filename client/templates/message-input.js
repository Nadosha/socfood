Template.messageInput.events({
	'keyup [name=message-input]': function(event) {

		if (event.which == 13) {
			var conversationId = Router.current().params.conversationId;
    		var findConver = Meteor.conversations.findOne(conversationId);
			var text = $('[name=message-input]').val();
			if (text !== '') {
				findConver.sendMessage(text);
			}
			$('[name=message-input]').val('');
		}
	}
})