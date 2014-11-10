/**
 * Module dependencies.
 */

var $ = require('jquery');
var page = require('page');
var HomeView = require('./home');

page('/', function(ctx, next) {
  var section = $('#content');

  section.empty();

  var jwt = localStorage.getItem('jwt');
  new HomeView({
    jwt: jwt
  }).appendTo(section[0]);
});
