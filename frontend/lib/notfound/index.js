/**
 * Module dependencies.
 */
var page = require('page');
var $ = require('jquery');

var html = require('./notfound.html');
var templater = require('../template');
var NotFound = templater(html);


page('*', function(ctx, next) {
  var section = $('#content');

  section.empty()
  new NotFound().appendTo(section[0]);
});
