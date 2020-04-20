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
} );
