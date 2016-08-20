(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.NodePass', ['three'], factory);
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

THREE.NodePass = function() {

	THREE.ShaderPass.call( this );

	this.textureID = 'renderTexture';

	this.fragment = new THREE.RawNode( new THREE.ScreenNode() );

	this.node = new THREE.NodeMaterial();
	this.node.fragment = this.fragment;

	this.build();

};

THREE.NodePass.prototype = Object.create( THREE.ShaderPass.prototype );
THREE.NodePass.prototype.constructor = THREE.NodePass;

THREE.NodeMaterial.addShortcuts( THREE.NodePass.prototype, 'fragment', [ 'value' ] );

THREE.NodePass.prototype.build = function() {

	this.node.build();

	this.uniforms = this.node.uniforms;
	this.material = this.node;

};
}));