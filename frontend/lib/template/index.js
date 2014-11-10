var ripple = require('ripplejs');
var refs = require('ripplejs-refs');
var events = require('ripplejs-events');
var azshow = require('../directives/azshow');
var json = require('../filters/json');


module.exports = function(html) {
  var View = ripple(html);

  View
    .use(refs)
    .use(events);

  // Directives
  azshow(View);

  // Filters
  json(View);

  return View;
}
