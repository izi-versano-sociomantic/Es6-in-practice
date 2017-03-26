let guessMe1 = 1;
let guessMe2 = 2;
{
    try
	{
        console.log( guessMe1, guessMe2 ); // (A) wont console
    }
    catch ( _ )
	{

    }

    let guessMe2 = 3;

    console.log( guessMe1, guessMe2 ); // (B) }--> 1 , 3

}

console.log( guessMe1, guessMe2 ); // (C) -> 1,2

() => {
    console.log( guessMe1 ); // (D) wont console
    var guessMe1 = 5;
    let guessMe2 = 6;
    console.log( guessMe1, guessMe2 ); // (E) wont console
};

console.log( guessMe1, guessMe2 ); // (F) 1,2
