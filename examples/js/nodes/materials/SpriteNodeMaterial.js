(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.SpriteNodeMaterial', ['three'], factory);
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

THREE.SpriteNodeMaterial = function () {

	this.node = new THREE.SpriteNode();

	THREE.NodeMaterial.call( this, this.node, this.node );

};

THREE.SpriteNodeMaterial.prototype = Object.create( THREE.NodeMaterial.prototype );
THREE.SpriteNodeMaterial.prototype.constructor = THREE.SpriteNodeMaterial;

THREE.NodeMaterial.addShortcuts( THREE.SpriteNodeMaterial.prototype, 'node',
[ 'color', 'alpha', 'transform', 'spherical' ] );
}));