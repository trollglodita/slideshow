define(function(require, exports, module) {
	var View = require('famous/core/View');
	var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
	var StateModifier = require('famous/modifiers/StateModifier');
	var SlideshowView = require('SlideshowView');

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    AppView.DEFAULT_OPTIONS = {
    	// it's a good idea to add a property in the default options
        // even when it's undefined    
        data: undefined
    };

    function AppView(options) {
        View.apply(this, arguments);

        // passing in data
        var slideshowView = new SlideshowView({
            data: this.options.data
        });

        this.add(slideshowView);

    }

    module.exports = AppView;
});