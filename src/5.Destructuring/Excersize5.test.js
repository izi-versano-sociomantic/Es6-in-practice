
function drawChart( data,
{
    chartType = 0,
    bullColor = 'green',
    bearColor = 'red',
    days      = 30
} )
{
        // do not implement the function body
    return bullColor ;
}


test( 'Combine objects and arrays' , () => {
    expect( drawChart( [],{bullColor : 'purple'} ) ).toBe( 'purple' );
} );
