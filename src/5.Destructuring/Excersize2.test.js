function fib( n )
{
    let fibCurrent = 1; let fibLast = 0;

    if ( n < 0 ) return NaN;
    if ( n <= 1 ) return n;
    for ( let fibIndex = 1; fibIndex < n; ++fibIndex )
  {
    // Insert one destructuring expression here
        [ fibCurrent, fibLast ] = [ fibCurrent + fibLast, fibCurrent ];
    }
    return fibCurrent;
}

test( 'Fibonnaci swap last with current', () => {
    expect( fib( 10 ) ).toBe( 55 );
} );


