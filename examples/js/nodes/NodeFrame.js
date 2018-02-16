(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.NodeFrame', ['three'], factory);
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

THREE.NodeFrame = function ( time ) {

	this.time = time !== undefined ? time : 0;

	this.frameId = 0;

};

THREE.NodeFrame.prototype.update = function ( delta ) {

	++this.frameId;

	this.time += delta;
	this.delta = delta;

	return this;

};

THREE.NodeFrame.prototype.updateNode = function ( node ) {

	if ( node.frameId === this.frameId ) return this;

	node.updateFrame( this );

	node.frameId = this.frameId;

	return this;

};
}));