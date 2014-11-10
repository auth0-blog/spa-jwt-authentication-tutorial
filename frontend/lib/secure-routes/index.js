/**
 * Module dependencies.
 */
var page = require('page');
var jwtDecode = require('jwt-decode');
var $ = require('jquery');

function goToPage(path) {
  setTimeout(function() {
    page(path);
  }, 0);
}

$.ajaxSetup({
  beforeSend: function(xhr) {
    if (localStorage.getItem('jwt')) {
      xhr.setRequestHeader('Authorization',
            'Bearer ' + localStorage.getItem('jwt'));
    }
  }
});

page(new RegExp('^(?!.*(/signin)|(/signup)).*$'), function(ctx, next) {
  var jwt = localStorage.getItem('jwt');
  try {
    if (!jwt || !jwtDecode(jwt)) {
      goToPage('/signin');
    } else {
      next();
    }
  } catch(ex) {
    goToPage('/signin');
  }
});


