var gumerPSN = new Psn(); // Gumer Playstation module

gumerPSN.init({	                      // Our PSN Module, we have to start it once. - irkinsander
   debug      : true,	                // Let's set it true, it's still in early development. So, report everything that goes wrong please.
   email      : process.env.PSN_EMAIL, // A valid PSN/SCE account (can be new one) // TODO: Using the user's credentials to do this.
   password   : process.env.PSN_PASS,	// Account's password
   npLanguage : "en",			            // The language the trophy's name and description will shown as
   region     : "it"			            // The server region that will push data
});

Meteor.methods({
    'friend.getStatus': function(friend) {
      try {
        var getProfileSync = Meteor.wrapAsync(gumerPSN.getProfile);
        return getProfileSync(friend.name).presence.primaryInfo.onlineStatus;
      } catch(e) {
        return "offline"
      }
    },
    'color.toInt32': function(color){
      color = color.replace('#', '');
      var r = parseInt(color.substring(0,2),16);
      var g = parseInt(color.substring(2,4),16);
      var b = parseInt(color.substring(4,6),16);
      return r << 16 | g << 8 | b;
    }
});
