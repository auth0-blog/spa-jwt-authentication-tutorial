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

  var jwt = localStorage.getItem('jwt');
  var decodedJwt = jwt && jwtDecode(jwt);

  new HomeView({
    jwt: jwt,
    decodedJwt: decodedJwt
  }).appendTo(section[0]);
});
