Template.addProductsForm.events({
	'click #submit-addProductForm': function(event) {
		event.preventDefault();
		var productName = $('#productName').val();
		var productDescription = $('#productDescription').val();
		var imageUrl = $('#productImageURL').val();
		var productPrice = $('#productPrice').val();
		var sessionSeller = Session.get('sellerId');
console.log(sessionSeller);

		var product = {
			name: productName,
			img: imageUrl,
			description: productDescription,
			sellerId: sessionSeller,
			price: productPrice
		}

		Meteor.call('insertProduct', sessionSeller, product);
		sweetAlert("Perfect! Product was added =)");
	}
});