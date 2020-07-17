let moduleA = require('./commonjs-module.js');

console.log(moduleA.getModuleName());
moduleA.setModuleName('commonjs module');
console.log(moduleA.getModuleName());

console.log(moduleA._moduleName);

var map = moduleA.getMap();
map.list = ['x','y','z'];
console.log(moduleA.getMap());
console.log(moduleA.map)


