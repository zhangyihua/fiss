/**
 * fism main module
 * 
 */
var fis = module.exports = require('fis3');
fis.require.prefixes.unshift('fiss');

fis.cli.name = 'fiss';
fis.cli.info = require('./package.json');
fis.cli.version = require('./modules/version');

var config = require('./modules/config.js');
config.init(fis);