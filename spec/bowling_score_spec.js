describe('Bowling_score', function() {
  
  var game;
  
  beforeEach(function() {
    game = new Bowling_score();
    // We do this so that each test can check a game from scratch.
  });

  it("shows the result of the Gutter game", function() {
    // var frame;
    for ( var i = 0; i < 10; i++ ){
      // frame = new Frame();
      // frame.roll(0);
      // frame.roll(0);
      // These 3 steps above need to be repeated every test, 
      // So, to avoid repetition of code, I create a Mock function called getMockFrame
      // that constructs a frame for every test. -
      game.input_frame(getMockFrame(0,0));
    }
    expect( game.score() ).toEqual(0);
  });
  
  it("shows the result of a normal game", function() {
    for ( var i = 0; i < 10; i++ ){
      game.input_frame(getMockFrame(1,3));
    }
    expect( game.score() ).toEqual(40);
  });





  function getMockFrame (first, second) {
    var frame = new Frame();
    frame.roll(first);
    frame.roll(second);

    return frame;
  }

});
