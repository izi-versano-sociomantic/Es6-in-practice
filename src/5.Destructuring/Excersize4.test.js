let x = { A : [ 't', 'e', 's', 't' ] };
let { A : [ ,,y ]} =  x ;


test( 'Combine objects and arrays' , () => {
    expect( y ).toBe( 's' );
} );
