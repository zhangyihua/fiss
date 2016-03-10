/**
 * fism config
 */

// 初始化脚手架
function initScaffold(fis) {
	fis.set('scaffold.namespace', 'fiss-scaffold');
	fis.set('scaffold.type', 'github');
}
var config = {
	init: function(fis) {
		initScaffold(fis);
	}
}

module.exports = config;