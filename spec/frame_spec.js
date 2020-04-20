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

    it( "should return false for a frame with one score that isn't a strike", () => {
      frame.addScore( 3 );

      expect( frame.isComplete() ).toEqual( false );
    } );

    it( "should return true for a strike", () => {
      frame.addScore( 10 );

      expect( frame.isComplete() ).toEqual( true );
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

  describe( ".isStrike", () => {
    it( "returns true when the frame is a strike", () => {
      frame.addScore( 10 );

      expect( frame.isStrike() ).toEqual( true );
    } );

    it( "returns false when the frame is new", () => {
      expect( frame.isStrike() ).toEqual( false );
    } );

    it( "returns false when the frame is not a strike", () => {
      frame.addScore( 8 );

      expect( frame.isStrike() ).toEqual( false );
    } );
  } );

  describe( ".addBonus", () => {
    it( "adds a bonus that is factored into the frame total score", () => {
      frame.addScore( 2 );
      frame.addScore( 8 );
      frame.addBonus( 5 );
      frame.calcTotal( 5 );

      expect( frame.total ).toEqual( 20 );
    } );
  } );

  describe( ".hasAllBonuses", () => {
    it( " returns false if the frame requires bonuses", () => {
      frame.addScore( 5 );
      frame.addScore( 5 );

      expect( frame.hasAllBonuses() ).toEqual( false );
    } );
  } );
} );
