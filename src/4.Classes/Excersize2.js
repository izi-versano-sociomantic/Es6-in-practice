class Character
{
	constructor( x, y )
	{
		this.x = x;
		this.y = y;

		// players face right
		this.mx = 1;
		this.my = 0;
	}

	location()
	{
		return { x: this.x, y: this.y };
	}


	move()
	{
		this.x += this.mx;
		this.y += this.my;
		// set borders
		if ( this.x < 0 )
			this.x = 0;
		if ( this.x > 9 )
			this.x = 9;
		if ( this.y < 0 )
			this.y = 0;
		if ( this.y > 9 )
			this.y = 9;
	}
}

class PlayerCharacter extends Character
{
	constructor( x, y )
	{
		super( x, y );
		this.point = 0;
	}
	get location()
	{
		return super.location();
	}

	set location( cord )
	{
		this.x = cord;
		this.y = cord;
	}

	faceRight()
	{
		this.mx = 1;
		this.my = 0;
	}


	faceTop()
	{
		this.mx = 0;
		this.my = 1;
	}

	faceLeft()
	{
		this.mx = -1;
		this.my = 0;
	}

	faceDown()
	{
		this.mx =  0;
		this.my = -1;
	}

	addToPoints()
	{
		this.point += 1;
	}

}

class NonPlayerCharacter extends Character
{
	constructor( x, y )
	{
		super( x, y );
	}

	get location()
	{
		return super.location();
	}

	set location( h )
	{
		this.x = Math.floor( Math.random() * h );
		this.y = Math.floor( Math.random() * h );
	}

	faceRandom()
	{
		let face = Math.floor( Math.random() * 4 );

    // face diffrent directions
		this.mx = [ 0, 0, -1, 1 ][ face ];
		this.my = [ -1, 1, 0, 0 ][ face ];
	}

	meetWith( player )
	{
		console.log( ' this.location  ', this.location );
		console.log( ' player.location ' , player.location );


		if ( this.location.x == player.location.x  &&
		this.location.y == player.location.y )
		{
			player.addToPoints();
			console.log( 'player point :' +  player.point );
		}
	}
}


let playCharacter = new PlayerCharacter();
let nonCharacter = new NonPlayerCharacter();


playCharacter.location = 0;// start on zero coordinates
nonCharacter.location = 10;// start on random coordinates


function startGame()
{

	playCharacter.move();
	nonCharacter.move();

    //change non player facing direction
	nonCharacter.faceRandom();

    //player face up
	playCharacter.faceTop();
    //see if it meets the player
	nonCharacter.meetWith( playCharacter );


}

setInterval( startGame, 5000 );

nonCharacter.location = 0;// make the players meet





