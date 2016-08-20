(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.PhongNodeMaterial', ['three'], factory);
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

THREE.PhongNodeMaterial = function() {

	this.node = new THREE.PhongNode();

	THREE.NodeMaterial.call( this, this.node, this.node );

};

THREE.PhongNodeMaterial.prototype = Object.create( THREE.NodeMaterial.prototype );
THREE.PhongNodeMaterial.prototype.constructor = THREE.PhongNodeMaterial;

THREE.NodeMaterial.addShortcuts( THREE.PhongNodeMaterial.prototype, 'node',
[ 'color', 'alpha', 'specular', 'shininess', 'normal', 'normalScale', 'emissive', 'ambient', 'light', 'shadow', 'ao', 'environment', 'environmentAlpha', 'transform' ] );
}));