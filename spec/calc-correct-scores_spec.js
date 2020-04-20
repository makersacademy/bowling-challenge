"use strict";

describe( "game should automatically calcuate the correct scores", () => {
  let game;

  beforeEach( () => {
    game = new Game();
  } );

  describe( "should calcuate the correct scores for normal frames", () => {
    it( "after the first ball", () => {
      game.addScore( 2 );

      expect( game.frame( 0 ).score1 ).toEqual( 2 );
      expect( game.frame( 0 ).score2 ).toEqual( null );
      expect( game.frame( 0 ).total ).toEqual( null );
    } );

    it( "after the second ball", () => {
      game.addScore( 2 );
      game.addScore( 4 );


      expect( game.frame( 0 ).score1 ).toEqual( 2 );
      expect( game.frame( 0 ).score2 ).toEqual( 4 );
      expect( game.frame( 0 ).total ).toEqual( 6 );
    } );
  } );
} );
