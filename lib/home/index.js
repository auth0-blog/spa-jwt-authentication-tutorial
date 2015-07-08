/**
 * Module dependencies.
 */
var jwtDecode = require('jwt-decode');
var $ = require('jquery');
var page = require('page');
var HomeView = require('./home');

page('/', function(ctx, next) {
  var section = $('#content');

  section.empty();

  new HomeView().appendTo(section[0]);
});
