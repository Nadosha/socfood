import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  return Meteor.methods({
  	insertSeller: function(seller){
  		Sellers.insert(seller);
  	},
  	insertProduct: function(serviceId, product) {
  		console.log(serviceId,product)
  		Sellers.update({_id: serviceId}, {$addToSet: {'product': product}},function(err,res){
  			console.log(err,res)
  		});
  	}
  })
});
