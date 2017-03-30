let f = () => [ ...'12345' ]; // returns an array
let A = f().map( f );

//console.table( A );//will print table with array values :
                                                            /*
                                                            ["1", "2", "3", "4", "5"]
                                                            ["1", "2", "3", "4", "5"]
                                                            ["1", "2", "3", "4", "5"]
                                                            ["1", "2", "3", "4", "5"]
                                                            ["1", "2", "3", "4", "5"]
                                                            */



describe( 'Shallow copy an array ', () => {
    it( 'matches even if received contains additional elements', () => {
        expect( f() ).toEqual( expect.arrayContaining( [ '1','2','3','4','5' ] ) );
    } );
} );
