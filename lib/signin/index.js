/**
 * Module dependencies.
 */

var $ = require('jquery');
var page = require('page');
var jwtDecode = require('jwt-decode');


var SigninView = require('./signin')

page('/signin', function(ctx, next) {
  var section = $('#content');

  section.empty()
  new SigninView().appendTo(section[0]);
});
