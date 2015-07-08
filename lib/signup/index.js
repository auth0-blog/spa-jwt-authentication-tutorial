/**
 * Module dependencies.
 */

var $ = require('jquery');
var page = require('page');
var jwtDecode = require('jwt-decode');


var SignupView = require('./signup');

page('/signup', function(ctx, next) {
  var section = $('#content');

  section.empty();

  new SignupView().appendTo(section[0]);
});
