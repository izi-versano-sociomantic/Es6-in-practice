const myarray = [ ...Array( 10 ).keys() ].map( i => Array( 10 ).fill( null ) );


describe( 'Matrix 10X10 should contain only nulls  ', () => {
    it( '', () => {
        myarray.map( function( a ) {
            a.map( function( b ){
                expect( b ).toBe( null );
            } );
        } );
    } ); } );
