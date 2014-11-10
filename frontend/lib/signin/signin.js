var request = require('browser-request')
var page = require('page');

var html = require('./signin.html');
var templater = require('../template');
var Signin = templater(html);

Signin.prototype.login = function() {
  request({
    url: 'http://localhost:3001/sessions/create',
    method: 'POST',
    data: {
      username: this.refs.username.value,
      password: this.refs.password.value
    }
  }, function(err, resp, body) {
    if (err) {
      alert(body);
      return;
    }

    localStorage.setItem('jwt', body.id_token);
    page('/');
  });
}
module.exports = new Signin();
