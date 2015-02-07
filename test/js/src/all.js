

test( "all" , function ( ) {

	var asc = locale.asc( ) ;
	var desc = locale.desc( ) ;

	ok(  asc( "a" , "b" ) < 0 ) ;
	ok( desc( "a" , "b" ) > 0 ) ;
	ok(  asc( "à" , "b" ) < 0 ) ;
	ok( desc( "à" , "b" ) > 0 ) ;

} ) ;
