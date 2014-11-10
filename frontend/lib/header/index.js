/**
 * Module dependencies.
 */
var html = require('./header.html');
var templater = require('../template');
var Header = templater(html);

/**
 * Initialize and render
 */

var header = new Header();
header.appendTo('header');
