describe( "Frame", () => {
  let frame;

  beforeEach( () => {
    frame = new Frame();
  } );

  it( "should initialize the frame scores correctly", () => {
    expect( frame.score() ).toEqual( { score1: undefined, score2: undefined, total: undefined } );
  } );
} );
