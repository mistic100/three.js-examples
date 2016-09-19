(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.IntNode', ['three'], factory);
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

THREE.IntNode = function( value ) {

	THREE.InputNode.call( this, 'iv1' );

	this.value = [ Math.floor( value || 0 ) ];

};

THREE.IntNode.prototype = Object.create( THREE.InputNode.prototype );
THREE.IntNode.prototype.constructor = THREE.IntNode;

Object.defineProperties( THREE.IntNode.prototype, {
	number: {
		get: function() {

			return this.value[ 0 ];

		},
		set: function( val ) {

			this.value[ 0 ] = Math.floor( val );

		}
	}
} );
}));