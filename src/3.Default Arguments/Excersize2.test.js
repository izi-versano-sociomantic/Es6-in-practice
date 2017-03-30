var  printComment = function( comment, line =1 )
{
    return function( comment )
    {
        line += 1;

        return  line + ' ' + comment;
    };
}();


describe( ' output incremented by 1 after each call ', () => {
    it( ' ', () => {
        printComment( 'incremented' );// '2 incremented'
        printComment( 'incremented' );// '3 incremented'
        printComment( 'incremented' );// '4 incremented'
        printComment( 'incremented' );// '5 incremented'
        printComment( 'incremented' );// '6 incremented'
        expect( printComment( 'incremented' ) ) .toBe( '7 incremented' );
    } );
} );
