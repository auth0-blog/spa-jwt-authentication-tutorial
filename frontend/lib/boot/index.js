/**
 * Module dependencies.
 */

var page = require('page');

/**
 * Initialize modules
 */

require('../secure-routes');
require('../header');
require('../home');
require('../signin');
require('../signup');
require('../notfound');

/**
 * Initialize router
 */

page();


