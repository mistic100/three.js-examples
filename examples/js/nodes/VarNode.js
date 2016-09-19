(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.VarNode', ['three'], factory);
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

THREE.VarNode = function( type ) {

	THREE.GLNode.call( this, type );

};

THREE.VarNode.prototype = Object.create( THREE.GLNode.prototype );
THREE.VarNode.prototype.constructor = THREE.VarNode;

THREE.VarNode.prototype.getType = function( builder ) {

	return builder.getTypeByFormat( this.type );

};

THREE.VarNode.prototype.generate = function( builder, output ) {

	var varying = builder.material.getVar( this.uuid, this.type );

	return builder.format( varying.name, this.getType( builder ), output );

};
}));