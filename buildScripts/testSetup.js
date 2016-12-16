// This file isn't transpiled so we must use CommonJS and ES5

// Register Babel to transpiler before our tests run
require('babel-register')();

// Disable webpack featurs that Mocha doesn't understand
require.extensions['.css'] = function() {};
