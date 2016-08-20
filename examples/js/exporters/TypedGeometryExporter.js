(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.TypedGeometryExporter', ['three'], factory);
    }
    else if ('undefined' !== typeof exports && 'undefined' !== typeof module) {
        module.exports = factory(require('three'));
    }
    else {
        factory(root.THREE);
    }
}(this, function(THREE) {

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.TypedGeometryExporter = function () {};

THREE.TypedGeometryExporter.prototype = {

	constructor: THREE.TypedGeometryExporter,

	parse: function ( geometry ) {

		var output = {
			metadata: {
				version: 4.0,
				type: 'TypedGeometry',
				generator: 'TypedGeometryExporter'
			}
		};

		var attributes = [ 'vertices', 'normals', 'uvs' ];

		for ( var key in attributes ) {

			var attribute = attributes[ key ];
			
			var typedArray = geometry[ attribute ];
			var array = [];

			for ( var i = 0, l = typedArray.length; i < l; i ++ ) {

				array[ i ] = typedArray[ i ];

			}

			output[ attribute ] = array;

		}

		var boundingSphere = geometry.boundingSphere;

		if ( boundingSphere !== null ) {

			output.boundingSphere = {
				center: boundingSphere.center.toArray(),
				radius: boundingSphere.radius
			}

		}

		return output;

	}

};
}));