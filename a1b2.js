(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["a1b2"] = factory();
	else
		root["a1b2"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return(function(modules) {
  console.log("测试测试------>")
})
})
