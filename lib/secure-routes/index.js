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