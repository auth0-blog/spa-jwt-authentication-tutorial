var ripple = require('ripplejs');
var refs = require('../directives/refs');
var events = require('ripplejs-events');
var azshow = require('../directives/azshow');
var json = require('../filters/json');


module.exports = function(html) {
  var View = ripple(html);

  View
    .use(events)
    .use(refs)
    .use(json)
    .use(azshow);


  return View;
}
