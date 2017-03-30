
/*
this one was a bit complicated,
I didnt think about the recurrsion at the begining then
i went and implement it using es5:

function lcs( str1, str2 )
{

  var lastr1Char    = str1.slice(-1);
  var lastr2Char    = str2.slice(-1);
  var frontStr1Char = str1.slice(0, -1)
  var frontStr2Char = str2.slice(0, -1)


  //If either string is empty, stop
  if (str1 == '' || str2 == '')
    return ""

  if ( lastr1Char == lastr2Char )
  {

     return lcs(frontStr1Char, frontStr2Char) + lastr1Char
  }

  var  t1 = lcs( frontStr1Char, str2);
  var  t2 = lcs( str1, frontStr2Char);

  if ( t1.length > t2.length)
    return t1
  else
    return t2

}

console.log( lcs('aaa', 'aazz').length )

******************************************
Evantualy i was looking at your solution ,
debug it and undrstood where i was wrong.

*/


const maxCommon = ( [ head1,...tail1 ], [ head2,...tail2 ], len = 0 ) => {
    if ( typeof head1 === 'undefined' || typeof head2 === 'undefined' )
    {
         /* Write code here */
        return len;
    }

    if ( head1 === head2 )  return  maxCommon( tail1, tail2, len + 1 );

    let firstBranch =  maxCommon( tail1, [ head2,...tail2 ], 0 );
    let secondBranch = maxCommon( [ head1,...tail1 ], tail2, 0 );
    return Math.max( ...[ len, firstBranch, secondBranch ] );
};


describe( 'Maximum common substring', () => {
    it( ' ', () => {
        expect( maxCommon( '123', '1' ) ) .toBe( 1 );
        expect( maxCommon( '11111', '11f111g' ) ) .toBe( 3 );
        expect( maxCommon( 'abc', '111cab' ) ) .toBe( 2 );    } );
} );
