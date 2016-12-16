(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.SVGLoader', ['three'], factory);
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
 * @author zz85 / http://joshuakoo.com/
 */

THREE.SVGLoader = function ( manager ) {

	this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

};

THREE.SVGLoader.prototype = {

	constructor: THREE.SVGLoader,

	load: function ( url, onLoad, onProgress, onError ) {

		var scope = this;

		var parser = new DOMParser();

		var loader = new THREE.FileLoader( scope.manager );
		loader.load( url, function ( svgString ) {

			var doc = parser.parseFromString( svgString, 'image/svg+xml' );  // application/xml

			onLoad( doc.documentElement );

		}, onProgress, onError );

	}

};
}));