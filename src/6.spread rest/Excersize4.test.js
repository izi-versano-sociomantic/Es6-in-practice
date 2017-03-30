const sumArgs =  ( ...numbersToAdd )  =>  numbersToAdd.reduce( ( sum, next ) => sum + next );

describe( 'Shallow copy an array ', () => {
    it( 'matches even if received contains additional elements', () => {
        expect( sumArgs( 1,5 ) ).toBe( 6 );
    } );
} );
