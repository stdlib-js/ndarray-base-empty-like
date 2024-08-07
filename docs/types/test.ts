/*
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

import zeros = require( '@stdlib/ndarray-base-zeros' );
import empty = require( '@stdlib/ndarray-base-empty' );
import emptyLike = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const sh = [ 2, 2 ];
	const ord = 'row-major';

	emptyLike( zeros( 'float64', sh, ord ) ); // $ExpectType float64ndarray
	emptyLike( zeros( 'float32', sh, ord ) ); // $ExpectType float32ndarray
	emptyLike( zeros( 'complex128', sh, ord ) ); // $ExpectType complex128ndarray
	emptyLike( zeros( 'complex64', sh, ord ) ); // $ExpectType complex64ndarray
	emptyLike( zeros( 'int32', sh, ord ) ); // $ExpectType int32ndarray
	emptyLike( zeros( 'int16', sh, ord ) ); // $ExpectType int16ndarray
	emptyLike( zeros( 'int8', sh, ord ) ); // $ExpectType int8ndarray
	emptyLike( zeros( 'uint32', sh, ord ) ); // $ExpectType uint32ndarray
	emptyLike( zeros( 'uint16', sh, ord ) ); // $ExpectType uint16ndarray
	emptyLike( zeros( 'uint8', sh, ord ) ); // $ExpectType uint8ndarray
	emptyLike( zeros( 'uint8c', sh, ord ) ); // $ExpectType uint8cndarray
	emptyLike( empty( 'bool', sh, ord ) ); // $ExpectType boolndarray
	emptyLike( zeros( 'generic', sh, ord ) ); // $ExpectType typedndarray<number>
}

// The compiler throws an error if the function is provided a first argument is not an ndarray which has a recognized/supported data type...
{
	emptyLike( '10' ); // $ExpectError
	emptyLike( 10 ); // $ExpectError
	emptyLike( false ); // $ExpectError
	emptyLike( true ); // $ExpectError
	emptyLike( null ); // $ExpectError
	emptyLike( [] ); // $ExpectError
	emptyLike( {} ); // $ExpectError
	emptyLike( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	emptyLike(); // $ExpectError
	emptyLike( zeros( 'float64', [ 2, 2 ], 'row-major' ), 1 ); // $ExpectError
}
