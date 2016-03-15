/**
 * fism config
 */

// 初始化脚手架
function initScaffold(fis) {
    fis.set('scaffold.namespace', 'fiss-scaffold');
    fis.set('scaffold.type', 'github');
}


//fis.require.prefixes 增加fiss
function modifyRequirePrefix(fis) {
    //default fis.require.prefixes = ['fis3', 'fis'];
    fis.require.prefixes = ['fiss', 'fis3', 'fis'];
}

var config = {
    init: function(fis) {
        initScaffold(fis);
        modifyRequirePrefix(fis);
    }
}


module.exports = config;
