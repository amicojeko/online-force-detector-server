SSR.compileTemplate('colors', '{{getColors}}');

Template.colors.helpers({
  getColors: function() {
    var colors = "";

    Friends.find().fetch().forEach(function(friend){
      if (Meteor.call('friend.getStatus', friend) == 'online'){
        console.log('online!');
        colors += Meteor.call('color.toInt32', friend.color) + ';';
      } else {
        console.log('offline!');
        colors += "0;"
      }

    })
    return colors;
  }

});

SSR.compileTemplate('colors_test', '{{getTestColors}}');

Template.colors_test.helpers({
  getTestColors: function() {
    var colors = "";
    Friends.find().fetch().forEach(function(friend){
      colors += Meteor.call('color.toInt32', friend.color) + ';';
    })
    return colors;
  }
})
