var page = require('page');
var $ = require('jquery');

var html = require('./signup.html');
var templater = require('../template');
var Signup = templater(html);

Signup.prototype.signup = function(ev) {
  ev.preventDefault();
  $.ajax({
    url: 'http://localhost:3001/users',
    type: 'POST',
    dataType: 'json',
    data: {
      username: this.refs.username.value,
      password: this.refs.password.value,
      extra: this.refs.extra.value
    }
  }).then(function(resp) {
    localStorage.setItem('jwt', resp.id_token);
    page('/');
  }, function(err) {
    alert(err.responseText);
  });
}

module.exports = Signup;
