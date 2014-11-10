/**
 * Module dependencies.
 */

var $ = require('jquery');
var page = require('page');

page('/signup', function(ctx, next) {
  var section = $('#content');

  section.empty()
  require('./signup').appendTo(section[0]);
});
