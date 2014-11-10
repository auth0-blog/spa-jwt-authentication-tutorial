/**
 * Module dependencies.
 */

var $ = require('jquery');
var page = require('page');
var jwtDecode = require('jwt-decode');


var HomeView = require('./home');

page('/', function(ctx, next) {
  var section = $('#content');

  section.empty()
  HomeView.appendTo(section[0]);
});
