function CounterES6( callback, delay = 1000 ) {
    setTimeout( callback, delay );
}


CounterES6( () => console.log( 'delay' ) );
