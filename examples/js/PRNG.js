(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.PRNG', ['three'], factory);
    }
    else if ('undefined' !== typeof exports && 'undefined' !== typeof module) {
        module.exports = factory(require('three'));
    }
    else {
        factory(root.THREE);
    }
}(this, function(THREE) {

// Park-Miller-Carta Pseudo-Random Number Generator
// https://github.com/pnitsch/BitmapData.js/blob/master/js/BitmapData.js

var PRNG = function () {

	this.seed = 1;
	this.next = function() {

		return ( this.gen() / 2147483647 );

	};
	this.nextRange = function( min, max )	{

		return min + ( ( max - min ) * this.next() )

	};
	this.gen = function() {

		return this.seed = ( this.seed * 16807 ) % 2147483647;

	};

};
THREE.PRNG = PRNG;}));