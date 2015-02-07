
var desc = function ( locales , options ) {

	return function ( a , b ) {

		return b.localeCompare( a , locales , options ) ;

	} ;

} ;

exports.desc = desc ;
