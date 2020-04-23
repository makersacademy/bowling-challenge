"use strict";

describe( "Frame10", () => {
  let frame10;

  beforeEach( () => {
    frame10 = new Frame10();
  } );

  it( "is created with three null scores", () => {
    expect( frame10.score1 ).toEqual( null );
    expect( frame10.score2 ).toEqual( null );
    expect( frame10.score3 ).toEqual( null );
  } );

  describe( ".addScore", () => {
    it( "sets the first score", () => {
      frame10.addScore( 1 );

      expect( frame10.score1 ).toEqual( 1 );
    } );

    it( "sets the second score", () => {
      frame10.addScore( 1 );
      frame10.addScore( 2 );

      expect( frame10.score2 ).toEqual( 2 );
    } );

    it( "sets the third score", () => {
      frame10.addScore( 1 );
      frame10.addScore( 2 );
      frame10.addScore( 3 );


      expect( frame10.score3 ).toEqual( 3 );
    } );
  } );

  describe( ".isComplete", () => {
    describe( "2 scores", () => {
      it( "returns false if the first ball is a strike", () => {
        frame10.addScore( 10 );
        frame10.addScore( 2 );

        expect( frame10.isComplete() ).toEqual( false );
      } );

      it( "returns false if the first two balls are a spare", () => {
        frame10.addScore( 3 );
        frame10.addScore( 7 );

        expect( frame10.isComplete() ).toEqual( false );
      } );

      it( "returns true if the first two balls aren't a spare", () => {
        frame10.addScore( 2 );
        frame10.addScore( 5 );

        expect( frame10.isComplete() ).toEqual( true );
      } );
    } );
  } );

  describe( ".total", () => {
    it( "sets the frame total", () => {
      frame10.total = 5;

      expect( frame10.total ).toEqual( 5 );
    } );
  } );

  describe( ".hasAllBonuses", () => {
    it( "always returns true", () => {
      expect( frame10.hasAllBonuses() ).toEqual( true );
    } );
  } );

  describe( ".calcTotal", () => {
    it( "sets the total with all 3 scores set", () => {
      frame10.addScore( 4 );
      frame10.addScore( 6 );
      frame10.addScore( 5 );
      frame10.calcTotal( 15 );

      expect( frame10.total ).toEqual( 30 );
    } );

    it( "sets the total with 2 scores set", () => {
      frame10.addScore( 4 );
      frame10.addScore( 2 );
      frame10.calcTotal( 15 );

      expect( frame10.total ).toEqual( 21 );
    } );
  } );

  describe( ".isSpare", () => {
    it( "returns false", () => {
      expect( frame10.isSpare() ).toEqual( false );
    } );
  } );

  describe( ".isStrike", () => {
    it( "returns false", () => {
      expect( frame10.isStrike() ).toEqual( false );
    } );
  } );

  describe( ".maxNextScore", () => {
    it( "returns 10 if no scores have been added", () => {
      expect( frame10.maxNextScore() ).toEqual( 10 );
    } );

    it( "returns 10 if the first score was a 10", () => {
      frame10.addScore( 10 );

      expect( frame10.maxNextScore() ).toEqual( 10 );
    } );
  } );
} );
