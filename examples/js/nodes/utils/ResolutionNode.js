(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.ResolutionNode', ['three'], factory);
    }
    else if ('undefined' !== typeof exports && 'undefined' !== typeof module) {
        module.exports = factory(require('three'));
    }
    else {
        factory(root.THREE);
    }
}(this, function(THREE) {

/**
 * @author sunag / http://www.sunag.com.br/
 */

THREE.ResolutionNode = function( renderer ) {

	THREE.Vector2Node.call( this );

	this.requestUpdate = true;

	this.renderer = renderer;

};

THREE.ResolutionNode.prototype = Object.create( THREE.Vector2Node.prototype );
THREE.ResolutionNode.prototype.constructor = THREE.ResolutionNode;

THREE.ResolutionNode.prototype.updateFrame = function( delta ) {

	var size = this.renderer.getSize();

	this.x = size.width;
	this.y = size.height;

};
}));