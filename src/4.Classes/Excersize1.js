class Character {
    constructor( x, y )
    {
        this.x = x;
        this.y = y;
    }


    set location( h )
    {
        this.x = Math.floor( Math.random() * h );
        this.y = Math.floor( Math.random() * h );
    }

    get location()
    {
        return { x : this.x, y : this.y };
    }
}

class PlayerCharacter extends Character {}

class NonPlayerCharacter extends Character {}

let playCharacter = new PlayerCharacter();
let nonCharacter = new NonPlayerCharacter();

playCharacter.location = 10;
nonCharacter.location = 10;

console.log( playCharacter.location );

console.log( nonCharacter.location );
