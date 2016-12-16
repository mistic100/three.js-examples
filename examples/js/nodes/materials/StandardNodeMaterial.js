(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.StandardNodeMaterial', ['three'], factory);
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

THREE.StandardNodeMaterial = function() {

	this.node = new THREE.StandardNode();

	THREE.NodeMaterial.call( this, this.node, this.node );

};

THREE.StandardNodeMaterial.prototype = Object.create( THREE.NodeMaterial.prototype );
THREE.StandardNodeMaterial.prototype.constructor = THREE.StandardNodeMaterial;

THREE.NodeMaterial.addShortcuts( THREE.StandardNodeMaterial.prototype, 'node',
[ 'color', 'alpha', 'roughness', 'metalness', 'reflectivity', 'clearCoat', 'clearCoatRoughness', 'normal', 'normalScale', 'emissive', 'ambient', 'light', 'shadow', 'ao', 'environment', 'transform' ] );
}));