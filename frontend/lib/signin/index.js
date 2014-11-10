/**
 * Module dependencies.
 */

var $ = require('jquery');
var page = require('page');

page('/signin', function(ctx, next) {
  var section = $('#content');

  section.empty()
  require('./signin').appendTo(section[0]);
});
