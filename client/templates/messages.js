Template.messageHistory.helpers({
	'isHomePage': function() {
		var currentRout = Router.current().conversationId;
		console.log(currentRout);
	}
});