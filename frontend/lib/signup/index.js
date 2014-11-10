/**
 * Module dependencies.
 */

var $ = require('jquery');
var page = require('page');

var SignupView = require('./signup');

page('/signup', function(ctx, next) {
  var section = $('#content');

  section.empty();

  new SignupView().appendTo(section[0]);
});
