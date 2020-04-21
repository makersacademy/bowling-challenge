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
    it( "returns the correct frame", () => {
      const frame10 = jasmine.createSpy();
      const NormalFrameClassDouble = function NormalFrameClassDouble() {
        return "frame";
      };
      const Frame10ClassDouble = function Frame10ClassDouble() {
        return frame10;
      };

      game = new Game( NormalFrameClassDouble, Frame10ClassDouble );

      expect( game.frame( 9 ) ).toEqual( frame10 );
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
