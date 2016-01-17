Router.configure({
   layoutTemplate: 'layout',
  loadingTemplate: 'loading',
           waitOn: function() { return Meteor.subscribe('friends'); }
});

Router.map(function() {
  this.route('friendsList', {path: '/'});

  this.route('friendPage', {
    path: '/friends/:_id',
    data: function() { return Friends.findOne(this.params._id); }
  });

  this.route('txt_colors_test', {
    path: 'colors/test',
    where:"server",
    action : function() {
      var html = SSR.render('colors_test');
      var response = this.response;

      response.writeHead(200, {'Content-Type':'text/plain'});
      response.end(html);
    }
  });

  this.route('txt_colors', {
    path: 'colors',
    where:"server",
    action : function() {
      var html = SSR.render('colors');
      var response = this.response;

      response.writeHead(200, {'Content-Type':'text/plain'});
      response.end(html);
    }
  });

});

Router.onBeforeAction('loading');
