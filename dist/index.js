/** @license Apache-2.0 */

'use strict';

/**
* Return a boolean indicating if a buffer length is compatible with provided ndarray meta data.
*
* @module @stdlib/ndarray-base-assert-is-buffer-length-compatible
*
* @example
* var isBufferLengthCompatible = require( '@stdlib/ndarray-base-assert-is-buffer-length-compatible' );
*
* var shape = [ 2, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var bool = isBufferLengthCompatible( 4, shape, strides, offset );
* // returns true
*
* @example
* var isBufferLengthCompatible = require( '@stdlib/ndarray-base-assert-is-buffer-length-compatible' );
*
* var shape = [ 2, 2 ];
* var strides = [ 2, 1 ];
* var offset = 2;
*
* var bool = isBufferLengthCompatible( 4, shape, strides, offset );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
