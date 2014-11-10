var html = require('./home.html');
var templater = require('../template');
var Homepage = templater(html);

Homepage.prototype.callAnonymousApi = function() {

};

var jwt = localStorage.getItem('jwt');
var decodedJwt = jwt && jwtDecode(jwt);

module.exports = new Homepage({
  jwt: jwt,
  decodedJwt: decodedJwt
});
