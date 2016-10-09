Template.messageInput.events({
	'keyup [name=message-input]': function(event) {

		if (event.which == 13) {
			var conversationId = Router.current().params.conversationId;
    		var findConver = Meteor.conversations.findOne(conversationId);
			var text = $('[name=message-input]').val();
			if (text !== '') {
				findConver.sendMessage(text);
			}
			var $heightOfBlock = $('#chat-box-wrapper').height();
			$('.chat-box').scrollTop($heightOfBlock);
			$('[name=message-input]').val('');
		}
	}
});

Template.messageInput.helpers({
	'isHomePage': function() {
		var currentRout = Router.current().params.conversationId;
		console.log(currentRout)
		if (currentRout == undefined) {
			return false
		} else {
			return true
		};
	}
})