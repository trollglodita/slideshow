define(function(require, exports, module) {
	var Engine  = require('famous/core/Engine');
	var View = require('../src/AppView');
    // import SlideData
    var SlideData = require('data/SlideData');

	 // import Utility
    var Utility = require('famous/utilities/Utility');

    // simple Get request to the Picasa api with callback
    Utility.loadURL(SlideData.getUrl(), initApp);

    var mainContext = Engine.createContext();


	var appView = new View();

	function initApp(data) {
        // parses out reponse data and retrieves array of urls
        data = SlideData.parse(data);

        // instantiates AppView with our url data
        var appView = new AppView({ data : data });

        mainContext.add(appView);
    }
});