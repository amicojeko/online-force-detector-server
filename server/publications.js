Meteor.publish('friends', function() {
  return Friends.find();
});
