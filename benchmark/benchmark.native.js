/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var bench = require( '@stdlib/bench-harness' );
var uniform = require( '@stdlib/random-array-uniform' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var tryRequire = require( '@stdlib/utils-try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var hypot = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( hypot instanceof Error )
};


// MAIN //

bench( pkg+'::native', opts, function benchmark( b ) {
	var opts;
	var x;
	var y;
	var h;
	var i;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, -50.0, 50.0, opts );
	y = uniform( 100, -50.0, 50.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		h = hypot( x[ i%x.length ], y[ i%y.length ] );
		if ( isnan( h ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( h ) ) {
		b.fail( 'should not return NaN' );
	} else {
		b.pass( 'benchmark finished' );
	}
	b.end();
});
