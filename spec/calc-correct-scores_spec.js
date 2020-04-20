"use strict";

describe( "game should automatically calcuate the correct scores", () => {
  let game;

  beforeEach( () => {
    game = new Game();
  } );

  describe( "should calcuate the correct scores for normal frames", () => {
    describe( "first frame", () => {
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

    describe( "later frame", () => {
      it( "after 2 frames complete", () => {
        game.addScore( 2 );
        game.addScore( 4 );
        game.addScore( 5 );
        game.addScore( 3 );

        expect( game.frame( 0 ).total ).toEqual( 6 );
        expect( game.frame( 1 ).total ).toEqual( 8 );
      } );
    } );
  } );
} );
