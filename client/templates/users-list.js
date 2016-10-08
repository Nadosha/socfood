Template.usersList.helpers({
  usersList: function() {
    var users = Meteor.users.find().fetch();
    console.log(JSON.stringify(users));
    return users;
  }
});
