(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.ClearPass', ['three'], factory);
    }
    else if ('undefined' !== typeof exports && 'undefined' !== typeof module) {
        module.exports = factory(require('three'));
    }
    else {
        factory(root.THREE);
    }
}(this, function(THREE) {

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.ClearPass = function ( clearColor, clearAlpha ) {

	THREE.Pass.call( this );

	this.needsSwap = false;

	this.clearColor = ( clearColor !== undefined ) ? clearColor : 0x000000;
	this.clearAlpha = ( clearAlpha !== undefined ) ? clearAlpha : 0;

};

THREE.ClearPass.prototype = Object.assign( Object.create( THREE.Pass.prototype ), {

	constructor: THREE.ClearPass,

	render: function ( renderer, writeBuffer, readBuffer, delta, maskActive ) {

		var oldClearColor, oldClearAlpha;

		if ( this.clearColor ) {

			oldClearColor = renderer.getClearColor().getHex();
			oldClearAlpha = renderer.getClearAlpha();

			renderer.setClearColor( this.clearColor, this.clearAlpha );

		}

		renderer.setRenderTarget( this.renderToScreen ? null : readBuffer );
		renderer.clear();

		if ( this.clearColor ) {

			renderer.setClearColor( oldClearColor, oldClearAlpha );

		}

	}

} );
}));