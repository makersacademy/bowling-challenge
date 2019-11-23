describe ('Game', function() {

  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
  });

  it('two rolls shows in tenFrame game', function() {
    var frame = new Frame(1, 3);
    game.endRoll(frame.endFrame);
    var frame = new Frame(2, 6);
    game.endRoll(frame.endFrame);
    expect(game.tenFrames).toEqual([[1, 3], [2, 6]]);
  });

  it('calculates the final score for 10 frames', function() {
    expect(standardGame()).toEqual(80);
  });

});
