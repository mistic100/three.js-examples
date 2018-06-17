(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.FloatNode', ['three'], factory);
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

THREE.FloatNode = function ( value ) {

	THREE.InputNode.call( this, 'fv1' );

	this.value = value || 0;

};

THREE.FloatNode.prototype = Object.create( THREE.InputNode.prototype );
THREE.FloatNode.prototype.constructor = THREE.FloatNode;
THREE.FloatNode.prototype.nodeType = "Float";

THREE.FloatNode.prototype.generateReadonly = function ( builder, output, uuid, type, ns, needsUpdate ) {

	var val = this.value;

	return builder.format( Math.floor( val ) !== val ? val : val + ".0", type, output );

};

THREE.FloatNode.prototype.toJSON = function ( meta ) {

	var data = this.getJSONNode( meta );

	if ( ! data ) {

		data = this.createJSONNode( meta );

		data.value = this.value;

		if ( this.readonly === true ) data.readonly = true;

	}

	return data;

};
}));