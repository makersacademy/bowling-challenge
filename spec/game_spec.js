"use strict";

describe( "Game", () => {
  let game;

  beforeEach( () => {
    game = new Game();
  } );

  describe( ".addScore", () => {
    it( "should accept a score from the player", () => {
      expect( game.addScore ).toBeDefined();
    } );
  } );

  describe( ".currentScore", () => {
    it( "should set the current score to zero on creation", () => {
      expect( game.currentScore ).toEqual( 0 );
    } );
  } );

  describe( ".frame", () => {
    it( "contains 10 frames", () => {
      expect( game.frame( 9 ) ).toEqual( jasmine.any( Frame10 ) );
      expect( game.frame( 10 ) ).toEqual( undefined );
    } );
  } );

  describe( ".isComplete", () => {
    it( "returns true if the game is complete", () => {
      for ( let i = 0; i < 18; i += 1 ) {
        game.addScore( 5 );
      }

      game.addScore( 2 );
      game.addScore( 2 );

      expect( game.isComplete() ).toEqual( true );
    } );

    it( "returns false if the game is incomplete", () => {
      for ( let i = 0; i < 18; i += 1 ) {
        game.addScore( 5 );
      }

      game.addScore( 2 );

      expect( game.isComplete() ).toEqual( false );
    } );
  } );
} );
