var  printComment = function( comment, line =1 )
{
    return function( comment )
    {
        line += 1;

        return  line + ' ' + comment;
    };
}();

console.log( printComment( 'cc' ) ) ;
