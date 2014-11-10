var $ = require('jquery')
var page = require('page');

var html = require('./signup.html');
var templater = require('../template');
var Signup = templater(html);

Signup.prototype.signup = function(e) {
  e.preventDefault();
  $.ajax({
    url: 'http://localhost:3001/users',
    dataType: 'json',
    type: 'POST',
    data: {
      username: this.refs.username.value,
      password: this.refs.password.value,
      extra: this.refs.extra.value
    }
  }).then(function(response) {
    localStorage.setItem('jwt', response.id_token);
    page('/');
  }, function(response) {
    alert(response.responseText);
  })
}

module.exports = Signup;
