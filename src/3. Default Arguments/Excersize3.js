function argList( productName, price = 100 ) {
    console.log( arguments.length ); //1
    console.log( productName === arguments[0] ); //true
    console.log( price === arguments[1] ); //false
}
argList( 'Krill Oil Capsules' );
