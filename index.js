/**
 * fism main module
 *
 */
var fis = module.exports = require('fis3');
var cliName = 'fiss';
fis.require.prefixes.unshift(cliName);

fis.cli.name = cliName;
fis.cli.info = require('./package.json');
fis.cli.version = require('./modules/version.js');

var config = require('./modules/config.js');
config.init(fis);