(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.LuminanceNode', ['three'], factory);
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

THREE.LuminanceNode = function( rgb ) {

	THREE.TempNode.call( this, 'fv1' );

	this.rgb = rgb;

};

THREE.LuminanceNode.prototype = Object.create( THREE.TempNode.prototype );
THREE.LuminanceNode.prototype.constructor = THREE.LuminanceNode;

THREE.LuminanceNode.prototype.generate = function( builder, output ) {

	builder.include( 'luminance_rgb' );

	return builder.format( 'luminance_rgb(' + this.rgb.build( builder, 'v3' ) + ')', this.getType( builder ), output );

};
}));