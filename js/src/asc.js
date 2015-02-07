
var asc = function ( locales , options ) {

	return function ( a , b ) {

		return a.localeCompare( b , locales , options ) ;

	} ;

} ;

exports.asc = asc ;
