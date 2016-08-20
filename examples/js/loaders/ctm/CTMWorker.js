(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.CTMWorker', ['three'], factory);
    }
    else if ('undefined' !== typeof exports && 'undefined' !== typeof module) {
        module.exports = factory(require('three'));
    }
    else {
        factory(root.THREE);
    }
}(this, function(THREE) {

importScripts( "lzma.js", "ctm.js" );

self.onmessage = function( event ) {

	var files = [];

	for ( var i = 0; i < event.data.offsets.length; i ++ ) {

		var stream = new CTM.Stream( event.data.data );
		stream.offset = event.data.offsets[ i ];

		files[ i ] = new CTM.File( stream );

	}

	self.postMessage( files );
	self.close();

};
}));