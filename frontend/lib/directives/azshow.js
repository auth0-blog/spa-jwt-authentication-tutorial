var $ = require('jquery');

module.exports = function(View) {
  View.directive('az-show', {
    update: function(value, el, view) {
      if (value) {
        $(el).show();
      } else {
        $(el).hide();
      }
    },
  })
}
