(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.TimerNode', ['three'], factory);
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

THREE.TimerNode = function( value, scale ) {

	THREE.FloatNode.call( this, value );

	this.requestUpdate = true;

	this.scale = scale !== undefined ? scale : 1;

};

THREE.TimerNode.prototype = Object.create( THREE.FloatNode.prototype );
THREE.TimerNode.prototype.constructor = THREE.TimerNode;

THREE.TimerNode.prototype.updateFrame = function( delta ) {

	this.number += delta * this.scale;

};
}));