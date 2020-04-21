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
    it( "calls isComplete() on the 10th frame", () => {
      const NormalFrameClassDouble = function NormalFrameClassDouble() { return "frame"; };
      const frame10 = { isComplete: function isComplete() {} };
      const Frame10ClassDouble = function Frame10ClassDouble() { return frame10; };
      spyOn( frame10, "isComplete" );

      game = new Game( NormalFrameClassDouble, Frame10ClassDouble );
      game.isComplete();

      expect( frame10.isComplete ).toHaveBeenCalledWith();
    } );
  } );
} );
