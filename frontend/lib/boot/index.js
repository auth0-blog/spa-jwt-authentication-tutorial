/**
 * Module dependencies.
 */

var page = require('page');

/**
 * Initialize modules
 */

require('../header');
require('../secured-routes');
require('../home');
require('../signin');
require('../signup');
require('../notfound');

/**
 * Initialize router
 */

page();


