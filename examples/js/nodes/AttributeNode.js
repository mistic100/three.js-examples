(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.AttributeNode', ['three'], factory);
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

THREE.AttributeNode = function( name, type ) {

	THREE.GLNode.call( this, type );

	this.name = name;

};

THREE.AttributeNode.prototype = Object.create( THREE.GLNode.prototype );
THREE.AttributeNode.prototype.constructor = THREE.AttributeNode;

THREE.AttributeNode.prototype.getAttributeType = function( builder ) {

	return typeof this.type === 'number' ? builder.getConstructorFromLength( this.type ) : this.type;

};

THREE.AttributeNode.prototype.getType = function( builder ) {

	var type = this.getAttributeType( builder );

	return builder.getTypeByFormat( type );

};

THREE.AttributeNode.prototype.generate = function( builder, output ) {

	var type = this.getAttributeType( builder );

	var attribute = builder.material.getAttribute( this.name, type );

	return builder.format( builder.isShader( 'vertex' ) ? this.name : attribute.varying.name, this.getType( builder ), output );

};
}));