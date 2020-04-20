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
} );
