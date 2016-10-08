Template.usersList.helpers({
  usersList: function() {
    var users = Meteor.users.find().fetch();
    return users;
  }
});
