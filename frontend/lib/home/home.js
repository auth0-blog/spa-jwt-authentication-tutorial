var request = require('browser-request')
var jwtDecode = require('jwt-decode');

var html = require('./home.html');
var templater = require('../template');
var Homepage = templater(html);

Homepage.prototype.callApi = function(type, url) {
  var _this = this;
  this.set('response', null);
  this.set('api', type);
  request({
    url: url,
    method: 'GET'
  }, function(err, response, body) {
    _this.set('response', body);
  });
}

Homepage.prototype.callAnonymousApi = function() {
  this.callApi('Anonymous', 'http://localhost:3001/api/random-quote');
};

Homepage.prototype.callSecuredApi = function() {
  this.callApi('Secured', 'http://localhost:3001/api/protected/random-quote');
}


var jwt = localStorage.getItem('jwt');
var decodedJwt = jwt && jwtDecode(jwt);

module.exports = new Homepage({
  jwt: jwt,
  decodedJwt: decodedJwt
});
