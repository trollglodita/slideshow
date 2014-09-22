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

    };

    function AppView(options) {
        View.apply(this, arguments);

        var slideshowview = new SlideshowView();

        this.add(slideshowview);

    }

    module.exports = AppView;
});