(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('three.Encodings', ['three'], factory);
    }
    else if ('undefined' !== typeof exports && 'undefined' !== typeof module) {
        module.exports = factory(require('three'));
    }
    else {
        factory(root.THREE);
    }
}(this, function(THREE) {

/**
 * @author Ben Houston / http://clara.io / bhouston
 * @author Prashant Sharma / spidersharma03
 */

THREE.Encodings = function() {
  if( THREE.toHalf === undefined ) throw new Error("THREE.Encodings is required for HDRCubeMapLoader when loading half data.");
}

THREE.Encodings.RGBEByteToRGBFloat = function( sourceArray, sourceOffset, destArray, destOffset ) {
  var e = sourceArray[sourceOffset+3];
  var scale = Math.pow(2.0, e - 128.0) / 255.0;

  destArray[destOffset+0] = sourceArray[sourceOffset+0] * scale;
  destArray[destOffset+1] = sourceArray[sourceOffset+1] * scale;
  destArray[destOffset+2] = sourceArray[sourceOffset+2] * scale;
}

THREE.Encodings.RGBEByteToRGBHalf = function( sourceArray, sourceOffset, destArray, destOffset ) {
  var e = sourceArray[sourceOffset+3];
  var scale = Math.pow(2.0, e - 128.0) / 255.0;

  destArray[destOffset+0] = THREE.toHalf( sourceArray[sourceOffset+0] * scale );
  destArray[destOffset+1] = THREE.toHalf( sourceArray[sourceOffset+1] * scale );
  destArray[destOffset+2] = THREE.toHalf( sourceArray[sourceOffset+2] * scale );
}
}));