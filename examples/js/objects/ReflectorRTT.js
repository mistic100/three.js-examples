(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.ReflectorRTT', ['three'], factory);
    }
    else if ('undefined' !== typeof exports && 'undefined' !== typeof module) {
        module.exports = factory(require('three'));
    }
    else {
        factory(root.THREE);
    }
}(this, function(THREE) {

THREE.ReflectorRTT = function ( width, height, options ) {

	THREE.Reflector.call( this, width, height, options );

	this.geometry.setDrawRange( 0, 0 ); // avoid rendering geometry

};

THREE.ReflectorRTT.prototype = Object.create( THREE.Reflector.prototype );
}));