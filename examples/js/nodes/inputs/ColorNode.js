(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.ColorNode', ['three'], factory);
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

THREE.ColorNode = function( color ) {

	THREE.InputNode.call( this, 'c' );

	this.value = new THREE.Color( color || 0 );

};

THREE.ColorNode.prototype = Object.create( THREE.InputNode.prototype );
THREE.ColorNode.prototype.constructor = THREE.ColorNode;

THREE.NodeMaterial.addShortcuts( THREE.ColorNode.prototype, 'value', [ 'r', 'g', 'b' ] );
}));