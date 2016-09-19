(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.Matrix4Node', ['three'], factory);
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

THREE.Matrix4Node = function( matrix ) {

	THREE.InputNode.call( this, 'm4' );

	this.value = matrix || new THREE.Matrix4();

};

THREE.Matrix4Node.prototype = Object.create( THREE.InputNode.prototype );
THREE.Matrix4Node.prototype.constructor = THREE.Matrix4Node;
}));