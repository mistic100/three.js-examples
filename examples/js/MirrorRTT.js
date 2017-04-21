(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.MirrorRTT', ['three'], factory);
    }
    else if ('undefined' !== typeof exports && 'undefined' !== typeof module) {
        module.exports = factory(require('three'));
    }
    else {
        factory(root.THREE);
    }
}(this, function(THREE) {

THREE.MirrorRTT = function ( width, height, options ) {

	THREE.Mirror.call( this, width, height, options );

	this.geometry.setDrawRange( 0, 0 ); // avoid rendering geometry

};

THREE.MirrorRTT.prototype = Object.create( THREE.Mirror.prototype );
}));