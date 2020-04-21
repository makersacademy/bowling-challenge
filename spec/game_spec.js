"use strict";

describe( "Game", () => {
  let game;

  beforeEach( () => {
    game = new Game();
  } );

  describe( ".addScore", () => {
    it( "calls addScore on the current frame", () => {
      const frame1Double = {
        addScore: function addScore() {},
        isComplete: function isComplete() { return false; }
      };
      spyOn( frame1Double, "addScore" );

      function NormalFrameClassDouble() {
        if ( typeof NormalFrameClassDouble.i === "undefined" ) {
          NormalFrameClassDouble.i = 0;
        }
        NormalFrameClassDouble.i += 1;
        if ( NormalFrameClassDouble.i === 1 ) {
          return frame1Double;
        }
        return {};
      }

      function Frame10ClassDouble() {
        return {};
      }

      game = new Game( NormalFrameClassDouble, Frame10ClassDouble );
      game.addScore( 1 );

      expect( frame1Double.addScore ).toHaveBeenCalledWith( 1 );
    } );
  } );

  describe( ".currentScore", () => {
    it( "returns the game's current score", () => {
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
