var $ = require('jquery')
var page = require('page');

var html = require('./signin.html');
var templater = require('../template');
var Signin = templater(html);

Signin.prototype.login = function(ev) {
  ev.preventDefault();
  $.ajax({
    url: 'http://localhost:3001/sessions/create',
    type: 'POST',
    dataType: 'json',
    data: {
      username: this.refs.username.value,
      password: this.refs.password.value
    }
  }).then(function(resp) {
    localStorage.setItem('jwt', resp.id_token);
    page('/');
  }, function(err) {
    alert(err.responseText);
  });
}

module.exports = Signin;
