(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.NodeUniform', ['three'], factory);
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

THREE.NodeUniform = function ( params ) {

	params = params || {};

	this.name = params.name;
	this.type = params.type;
	this.node = params.node;
	this.needsUpdate = params.needsUpdate;

};

Object.defineProperties( THREE.NodeUniform.prototype, {
	value: {
		get: function () {

			return this.node.value;

		},
		set: function ( val ) {

			this.node.value = val;

		}
	}
} );
}));