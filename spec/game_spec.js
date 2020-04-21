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
} );
