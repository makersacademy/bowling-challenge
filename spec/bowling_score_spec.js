describe('Bowling_score', function() {
  
  var game;
  
  beforeEach(function() {
    game = new Bowling_score();
    
  });

  it("shows the result of the basic game", function() {
    var frame;
    for ( var i = 0; i < 10; i++ ){
      frame = new Frame();
      frame.roll(0);
      frame.roll(0);
      game.input_frame(frame);
    }
    expect( game.score() ).toEqual(0);
  });
  
});
