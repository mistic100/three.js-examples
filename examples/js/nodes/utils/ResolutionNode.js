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

THREE.ResolutionNode = function ( renderer ) {

	THREE.Vector2Node.call( this );

	this.renderer = renderer;

};

THREE.ResolutionNode.prototype = Object.create( THREE.Vector2Node.prototype );
THREE.ResolutionNode.prototype.constructor = THREE.ResolutionNode;
THREE.ResolutionNode.prototype.nodeType = "Resolution";

THREE.ResolutionNode.prototype.updateFrame = function ( frame ) {

	var size = this.renderer.getSize(),
		pixelRatio = this.renderer.getPixelRatio();

	this.x = size.width * pixelRatio;
	this.y = size.height * pixelRatio;

};

THREE.ResolutionNode.prototype.toJSON = function ( meta ) {

	var data = this.getJSONNode( meta );

	if ( ! data ) {

		data = this.createJSONNode( meta );

		data.renderer = this.renderer.uuid;

	}

	return data;

};
}));