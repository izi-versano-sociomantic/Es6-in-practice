var guessMe1 = 1;
{
	let guessMe2 = 3;
	try
	{
		console.log( guessMe1, guessMe2 ); // (A)
	}
	catch ( _ )
	{

	}

	console.log( guessMe1, guessMe2 ); // (B)

}

let guessMe2 = 2;
console.log( guessMe1, guessMe2 ); // (C)

var printer = () => {
	var guessMe1 = 5;
	console.log( guessMe1 ); // (D)
	let guessMe2 = 6;
	console.log( guessMe1, guessMe2 ); // (E)
};

printer();
console.log( guessMe1, guessMe2 ); // (F)
