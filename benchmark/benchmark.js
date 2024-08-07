/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var bench = require( '@stdlib/bench-harness' );
var isndarrayLike = require( '@stdlib/assert-is-ndarray-like' );
var zeros = require( '@stdlib/ndarray-base-zeros' );
var empty = require( '@stdlib/ndarray-base-empty' );
var pkg = require( './../package.json' ).name;
var emptyLike = require( './../lib' );


// MAIN //

bench( pkg+'::base:dtype=float64', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'float64', [ 0 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = emptyLike( x );
		if ( y.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=float32', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'float32', [ 0 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = emptyLike( x );
		if ( y.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=complex128', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'complex128', [ 0 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = emptyLike( x );
		if ( y.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=complex64', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'complex64', [ 0 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = emptyLike( x );
		if ( y.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=int32', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'int32', [ 0 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = emptyLike( x );
		if ( y.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=uint32', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'uint32', [ 0 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = emptyLike( x );
		if ( y.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=int16', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'int16', [ 0 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = emptyLike( x );
		if ( y.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=uint16', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'uint16', [ 0 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = emptyLike( x );
		if ( y.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=int8', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'int8', [ 0 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = emptyLike( x );
		if ( y.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=uint8', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'uint8', [ 0 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = emptyLike( x );
		if ( y.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=uint8c', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'uint8c', [ 0 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = emptyLike( x );
		if ( y.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=bool', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = empty( 'bool', [ 0 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = emptyLike( x );
		if ( y.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=generic', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'generic', [ 0 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = emptyLike( x );
		if ( y.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
