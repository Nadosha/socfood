Template.addServiceForm.events({
	'click #submit-addServiceForm': function(event) {
		event.preventDefault();
		var user = Meteor.user();
		var serviceName = $('#serviceName').val();
		var serviceDescription = $('#serviceDescription').val();
		var imageUrl = $('#serviceImageURL').val();

		var seller = {
			name: serviceName,
			img: imageUrl,
			description: serviceDescription,
			createBy: {
				userId: user._id,
				userEmail: user.emails[0].address
			}
		}
		Meteor.call('insertSeller', seller);
		sweetAlert("You are amazing =)");
	},
	'keyup #serviceImageURL': function(event) {
		event.preventDefault()
		var url = $('#serviceImageURL').val();
		if(URL_REGEX.test(url)) {
			Session.set('logoUrl', url);
		} else {
			Session.set('logoUrl', undefined);
		}
	}
});

Template.addServiceForm.helpers({
	'isLogoSrc': function() {
		var sGetURL = Session.get('logoUrl');
		if (!sGetURL) {return true}
			else {return false}
	},
	'logoSrc': function() {
		return Session.get('logoUrl')
	}
})