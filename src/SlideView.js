define(function(require, exports, module) {
	var View = require('famous/core/View');
	var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var RenderNode = require('famous/core/RenderNode');
	var StateModifier = require('famous/modifiers/StateModifier');

    SlideView.DEFAULT_OPTIONS = {
    	size: [400, 500]
    };

    function SlideView(options) {
       View.apply(this, arguments);

       this.rootModifier = new StateModifier({
       		size: this.options.size
       });

       this.mainNode = this.add(this.rootModifier);

       _creteBackground.call(this);
    }

    function _creteBackground () {
    	var background = new Surface({
               // undefined size will inherit size from parent modifier
            properties: {
                backgroundColor: '#FFFFF5',
                boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.5)'
            }
        });

        this.mainNode.add(background);
    }

    SlideView.prototype = Object.create(View.prototype);
    SlideView.prototype.constructor = SlideView;

    module.exports = SlideView;
});