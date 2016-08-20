(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.ScreenNode', ['three'], factory);
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

THREE.ScreenNode = function( coord ) {

	THREE.TextureNode.call( this, undefined, coord );

};

THREE.ScreenNode.prototype = Object.create( THREE.TextureNode.prototype );
THREE.ScreenNode.prototype.constructor = THREE.ScreenNode;

THREE.ScreenNode.prototype.isUnique = function() {

	return true;

};

THREE.ScreenNode.prototype.getTexture = function( builder, output ) {

	return THREE.InputNode.prototype.generate.call( this, builder, output, this.getUuid(), 't', 'renderTexture' );

};
}));