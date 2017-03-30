const words = [ 'Shallow', 'copy', 'an array' ];
var otherWords = [ ...words ];



describe( 'Shallow copy an array ', () => {
    it( 'matches even if received contains additional elements', () => {
        expect( otherWords ).toEqual( expect.arrayContaining( words ) );
        expect( otherWords == words ).toBeFalsy();
    } );
} );
