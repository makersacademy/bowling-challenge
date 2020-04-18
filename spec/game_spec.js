describe( "Game", () => {
  let game;

  beforeEach( () => {
    game = new Game();
  } );

  it( "should accept a score from the player", () => {
    expect( game.addScore ).toBeDefined();
  } );

  it( "should allow you to access the current score", () => {
    expect( game.currentScore ).toBeDefined();
  } );

  it( "should set the current score to zero on creation", () => {
    expect( game.currentScore() ).toEqual( 0 );
  } );
} );
