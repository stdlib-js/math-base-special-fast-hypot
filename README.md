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

# hypot

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Compute the [hypotenuse][hypotenuse].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-fast-hypot
```

</section>

<section class="usage">

## Usage

```javascript
var hypot = require( '@stdlib/math-base-special-fast-hypot' );
```

#### hypot( x, y )

Computes the [hypotenuse][hypotenuse].

```javascript
var h = hypot( -5.0, 12.0 );
// returns 13.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   For a sufficiently large `x` and/or `y`, computing the hypotenuse will overflow.

    ```javascript
    var h = hypot( 1.0e154, 1.0e154 );
    // returns Infinity
    ```

    Similarly, for sufficiently small `x` and/or `y`, computing the hypotenuse will underflow.

    ```javascript
    var h = hypot( 1e-200, 1.0e-200 );
    // returns 0.0
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var hypot = require( '@stdlib/math-base-special-fast-hypot' );

var x;
var y;
var h;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu()*100.0 ) - 50.0;
    y = round( randu()*100.0 ) - 50.0;
    h = hypot( x, y );
    console.log( 'hypot(%d,%d) = %d', x, y, h );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-fast-hypot.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-fast-hypot

[test-image]: https://github.com/stdlib-js/math-base-special-fast-hypot/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-fast-hypot/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-fast-hypot/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-fast-hypot?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-fast-hypot
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-fast-hypot/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-fast-hypot/main/LICENSE

[hypotenuse]: http://en.wikipedia.org/wiki/Pythagorean_theorem

</section>

<!-- /.links -->
