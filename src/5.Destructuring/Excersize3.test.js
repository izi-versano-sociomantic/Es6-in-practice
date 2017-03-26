let obj = { first : { first : 'Jane', last : 'Doe'}, last : 'gil' };

// unexpected empty pattern  for the {} right assignment
//let { forst: {}, last: first } = obj;//type error undefined right  assignment {} is wrong


//first will return last 'gil' value
//forst will return undefined
let { forst, last: first } = obj;


test( 'destructuring recursive rules ', () => {
    expect( forst ).toBeUndefined();
    expect( first ).toBe( 'gil' );
} );


