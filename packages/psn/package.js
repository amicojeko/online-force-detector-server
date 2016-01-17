Package.describe({
  name: 'amicojeko:psn',
  version: '0.0.4',
  // Brief, one-line summary of the package.
  summary: 'gumer-psn library for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  Npm.depends( {
    "cheerio": "0.19.0",
    "request": "2.67.0"
  } );
  api.addFiles('psn.js', 'server');
  api.export('Psn', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('amicojeko:psn');
  api.addFiles('psn-tests.js');
});
