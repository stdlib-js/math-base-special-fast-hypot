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
var tape = require( 'tape' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var tryRequire = require( '@stdlib/utils-try-require' );
var abs = require( '@stdlib/math-base-special-abs' );


// VARIABLES //

var hypot = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( hypot instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof hypot, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the hypotenuse', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var h;
	var x;
	var y;
	var i;

	x = data.x;
	y = data.y;
	expected = data.expected;

	for ( i = 0; i < x.length; i++ ) {
		h = hypot( x[ i ], y[ i ] );
		if ( h === expected[ i ] ) {
			t.ok( true, 'x: '+x[i]+'. y: '+y[i]+'. h: '+h+'. Expected: '+expected[i]+'.' );
		} else {
			delta = abs( h - expected[ i ] );
			tol = 1.4 * EPS * abs( expected[ i ] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y[i]+'. h: '+h+'. Expected: '+expected[i]+'. Delta: '+delta+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the hypotenuse (canonical inputs)', opts, function test( t ) {
	var h;

	h = hypot( 3.0, 4.0 );
	t.strictEqual( h, 5.0, 'returns expected value' );

	h = hypot( 6.0, 8.0 );
	t.strictEqual( h, 10.0, 'returns expected value' );

	h = hypot( 5.0, 12.0 );
	t.strictEqual( h, 13.0, 'returns expected value' );

	t.end();
});

tape( 'the function can overflow', opts, function test( t ) {
	var h = hypot( 1.0e308, 1.0e308 );
	t.strictEqual( h, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function can underflow', opts, function test( t ) {
	var h = hypot( 1.0e-200, 1.0e-200 );
	t.strictEqual( h, 0.0, 'returns expected value' );
	t.end();
});
