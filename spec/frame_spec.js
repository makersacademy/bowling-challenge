"use strict";

describe( "Frame", () => {
  let frame;

  beforeEach( () => {
    frame = new Frame();
  } );

  it( "should initialize the frame scores correctly", () => {
    expect( frame.score() ).toEqual( { score1: undefined, score2: undefined, total: undefined } );
  } );

  describe( ".addScore", () => {
    it( "should add the first score correctly", () => {
      frame.addScore( 4 );

      expect( frame.score().score1 ).toEqual( 4 );
    } );

    it( "should add the second score correctly", () => {
      frame.addScore( 4 );
      frame.addScore( 3 );

      expect( frame.score().score2 ).toEqual( 3 );
    } );
  } );

  describe( ".total", () => {
    it( "should give the correct total after the first score is added", () => {
      frame.addScore( 4 );

      expect( frame.score().total ).toEqual( 4 );
    } );

    it( "should give the correct total after the second score is added", () => {
      frame.addScore( 4 );
      frame.addScore( 3 );

      expect( frame.score().total ).toEqual( 7 );
    } );
  } );
} );
