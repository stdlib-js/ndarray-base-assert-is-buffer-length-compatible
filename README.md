<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isBufferLengthCompatible

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Determine if a buffer length is compatible with ndarray meta data.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import isBufferLengthCompatible from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-buffer-length-compatible@esm/index.mjs';
```

#### isBufferLengthCompatible( len, shape, strides, offset )

Returns a `boolean` indicating if a buffer `length` is compatible with provided ndarray meta data.

```javascript
var shape = [ 2, 2 ];
var strides = [ 2, 1 ];
var offset = 25;

var bool = isBufferLengthCompatible( 30, shape, strides, offset );
// returns true

bool = isBufferLengthCompatible( 4, shape, strides, offset );
// returns false
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@esm/index.mjs';
import shape2strides from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@esm/index.mjs';
import strides2offset from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2offset@esm/index.mjs';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import isBufferLengthCompatible from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-buffer-length-compatible@esm/index.mjs';

var strides;
var offset;
var shape;
var bool;
var len;
var i;
var j;

len = 500; // buffer length
shape = [ 0, 0, 0 ];

for ( i = 0; i < 100; i++ ) {
    // Generate a random array shape:
    shape[ 0 ] = discreteUniform( 1, 10 );
    shape[ 1 ] = discreteUniform( 1, 10 );
    shape[ 2 ] = discreteUniform( 1, 10 );

    // Generate strides:
    if ( randu() < 0.5 ) {
        strides = shape2strides( shape, 'row-major' );
    } else {
        strides = shape2strides( shape, 'column-major' );
    }
    j = discreteUniform( 0, shape.length-1 );
    strides[ j ] *= ( randu() < 0.5 ) ? -1 : 1;

    // Compute the index offset:
    offset = strides2offset( shape, strides ) + discreteUniform( 0, 200 );

    // Determine if a buffer length is compatible with generated meta data:
    bool = isBufferLengthCompatible( len, shape, strides, offset );
    console.log( 'Buffer length: %d. Shape: %s. Strides: %s. Offset: %d. Compatible: %s.', len, shape.join( 'x' ), strides.join( ',' ), offset, bool );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-assert-is-buffer-length-compatible.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-assert-is-buffer-length-compatible

[test-image]: https://github.com/stdlib-js/ndarray-base-assert-is-buffer-length-compatible/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-assert-is-buffer-length-compatible/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-assert-is-buffer-length-compatible/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-assert-is-buffer-length-compatible?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-assert-is-buffer-length-compatible.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-assert-is-buffer-length-compatible/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-assert-is-buffer-length-compatible/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-base-assert-is-buffer-length-compatible/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-base-assert-is-buffer-length-compatible/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-assert-is-buffer-length-compatible/main/LICENSE

</section>

<!-- /.links -->
