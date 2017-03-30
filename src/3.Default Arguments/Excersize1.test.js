function CounterES6( callback, delay = 1000 ) {
    setTimeout( callback, delay );
}


jest.useFakeTimers();

test( 'waits 1 second before ending the game', () => {
    CounterES6( () => console.log( 'delay' ) );

    expect( setTimeout.mock.calls.length ).toBe( 1 );
    expect( setTimeout.mock.calls[0][1] ).toBe( 1000 );
} );
