define(function(require, exports, module) {
	var Engine  = require('famous/core/Engine');
	var View = require('../src/AppView');


	var mainContext = Engine.createContext();


	var appView = new View();

	mainContext.add(appView);
});