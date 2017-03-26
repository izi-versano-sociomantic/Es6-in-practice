let [ x, y ] = [ 'a', 'b' ]; // x='a', y='b'

[ x, y ] = [ y, x ];  // swap values

test( 'Swap', () => {
    expect( x ).toBe( 'b' );
} );
