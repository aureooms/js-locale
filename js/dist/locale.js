(function(exports, undefined){

	'use strict';


/* js/src/asc.js */

var asc = function ( locales , options ) {

	return function ( a , b ) {

		return a.localeCompare( b , locales , options ) ;

	} ;

} ;

exports.asc = asc ;

/* js/src/desc.js */

var desc = function ( locales , options ) {

	return function ( a , b ) {

		return b.localeCompare( a , locales , options ) ;

	} ;

} ;

exports.desc = desc ;

})(typeof exports === 'undefined' ? this['locale'] = {} : exports);
