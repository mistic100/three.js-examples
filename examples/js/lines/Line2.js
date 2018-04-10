(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.Line2', ['three'], factory);
    }
    else if ('undefined' !== typeof exports && 'undefined' !== typeof module) {
        module.exports = factory(require('three'));
    }
    else {
        factory(root.THREE);
    }
}(this, function(THREE) {

/**
 * @author WestLangley / http://github.com/WestLangley
 *
 */

THREE.Line2 = function ( geometry, material ) {

	THREE.LineSegments2.call( this );

	this.type = 'Line2';

	this.geometry = geometry !== undefined ? geometry : new THREE.LineGeometry();
	this.material = material !== undefined ? material : new THREE.LineMaterial( { color: Math.random() * 0xffffff } );

};

THREE.Line2.prototype = Object.assign( Object.create( THREE.LineSegments2.prototype ), {

	constructor: THREE.Line2,

	isLine2: true,

	copy: function ( source ) {

		// todo

		return this;

	}

} );
}));