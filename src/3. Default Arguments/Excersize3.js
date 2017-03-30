
let argList  = ( productName, price = 100 ) => {

    return { length     : arguments.length,
        condition1 : productName === arguments[0],
        condition2 : price === arguments[1]

    };
};

let ret = argList( 'Krill Oil Capsules' );

describe( ' output incremented by 1 after each call ', () => {
    it( ' ', () => {
        expect( ret.length ).toBe( 1 );
        expect( ret.condition1 ).toBeTruthy();
        expect( ret.condition1 ).toBeFalsy();
    } );
} );
