(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.WireframeGeometry2', ['three'], factory);
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

THREE.WireframeGeometry2 = function ( geometry ) {

	THREE.LineSegmentsGeometry.call( this );

	this.type = 'WireframeGeometry2';

	this.fromWireframeGeometry( new THREE.WireframeGeometry( geometry ) );

	// set colors, maybe

};

THREE.WireframeGeometry2.prototype = Object.assign( Object.create( THREE.LineSegmentsGeometry.prototype ), {

	constructor: THREE.WireframeGeometry2,

	isWireframeGeometry2: true,

	copy: function ( source ) {

		// todo

		return this;

	}

} );
}));