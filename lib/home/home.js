var $ = require('jquery')
var jwtDecode = require('jwt-decode');
var page = require('page');

var html = require('./home.html');
var templater = require('../template');
var Homepage = templater(html);

Homepage.prototype.callApi = function(type, url) {
  var _this = this;
  this.set('response', null);
  this.set('api', type);
  $.ajax({
    url: url,
    type: 'GET'
  }).then(function(response) {
    _this.set('response', response);
  }, function(response) {
    _this.set('response', response.responseText);
  });
}

Homepage.prototype.logout = function(event) {
  event.preventDefault();
  localStorage.removeItem('jwt');
  page('/signin');
}

Homepage.prototype.callAnonymousApi = function() {
  this.callApi('Anonymous', 'http://localhost:3001/api/random-quote');
};

Homepage.prototype.callSecuredApi = function() {
  this.callApi('Secured', 'http://localhost:3001/api/protected/random-quote');
}


module.exports = Homepage;
