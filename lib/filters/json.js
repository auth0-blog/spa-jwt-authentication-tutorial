module.exports = function(View) {
  View.filter('json', function(value) {
    return value && JSON.stringify(value, null, 4);
  })
}
