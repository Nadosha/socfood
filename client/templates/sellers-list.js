Template.sellersList.helpers({
	'sellersList': function() {
		var userId = Meteor.userId();
		var sellers = Sellers.find({ 'createBy.userId': { $ne: userId } });
		return sellers;
	},
	'ownSeller': function() {
		var userId = Meteor.userId();
		var sellers = Sellers.find({'createBy.userId': userId});
		return sellers;
	},
	'productsList': function() {
		var products = Products.find();
		console.log(products)
		
		return products;
	}

});

Template.sellersList.events({
	'click #addService': function(event) {
		event.preventDefault();
		Modal.show('addServiceForm');
	},
	'click #addProducts': function(event) {
		event.preventDefault();
		Session.set('sellerId', this._id)
		Modal.show('addProductsForm');

	},
	'click #makeOrder': function(event, template) {
		event.preventDefault();
		var checked = template.findAll("input[type=checkbox]:checked");
		var arr = checked.map(function(item) {
			return item.id;
		});
	}
});