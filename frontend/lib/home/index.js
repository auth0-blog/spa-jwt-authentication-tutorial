/**
 * Module dependencies.
 */

var $ = require('jquery');
var page = require('page');

page('/', function(ctx, next) {
  var section = $('#content');

  section.empty()
  require('./home').appendTo(section[0]);
});
