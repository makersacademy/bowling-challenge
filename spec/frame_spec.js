"use strict";

describe( "Frame", () => {
  let frame;

  beforeEach( () => {
    frame = new Frame();
  } );

  describe( ".addScore", () => {
    it( "should add the first score correctly", () => {
      frame.addScore( 4 );

      expect( frame.score1 ).toEqual( 4 );
    } );

    it( "should add the second score correctly", () => {
      frame.addScore( 4 );
      frame.addScore( 3 );

      expect( frame.score2 ).toEqual( 3 );
    } );
  } );

  describe( ".total", () => {
    it( "sets the frame total", () => {
      frame.total = 5;

      expect( frame.total ).toEqual( 5 );
    } );
  } );

  describe( ".isComplete", () => {
    it( "should return false for a new frame", () => {
      expect( frame.isComplete() ).toEqual( false );
    } );

    it( "should return false for a frame with one score", () => {
      frame.addScore( 3 );

      expect( frame.isComplete() ).toEqual( false );
    } );

    it( "should return true for a frame with two scores", () => {
      frame.addScore( 3 );
      frame.addScore( 4 );

      expect( frame.isComplete() ).toEqual( true );
    } );
  } );

  describe( ".calcTotal", () => {
    it( "calcuates the frame total", () => {
      frame.addScore( 2 );
      frame.addScore( 4 );
      frame.calcTotal();

      expect( frame.total ).toEqual( 6 );
    } );
  } );

  describe( ".isSpare", () => {
    it( "returns true if the frame is a spare", () => {
      frame.addScore( 2 );
      frame.addScore( 8 );

      expect( frame.isSpare() ).toEqual( true );
    } );

    it( "returns false for a new frame", () => {
      expect( frame.isSpare() ).toEqual( false );
    } );

    it( "returns false for a frame with one ball bowled", () => {
      frame.addScore( 4 );

      expect( frame.isSpare() ).toEqual( false );
    } );
  } );
} );
