var $ = require('jquery')
var page = require('page');

var html = require('./signin.html');
var templater = require('../template');
var Signin = templater(html);

Signin.prototype.login = function(e) {
  e.preventDefault();
  $.ajax({
    url: 'http://localhost:3001/sessions/create',
    dataType: 'json',
    type: 'POST',
    data: {
      username: this.refs.username.value,
      password: this.refs.password.value
    }
  }).then(function(response) {
    localStorage.setItem('jwt', response.id_token);
    page('/');
  }, function(response) {
    alert(response.responseText);
  })
}

module.exports = new Signin();
