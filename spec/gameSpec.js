describe ('Game', function() {

  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
  })

  it('two rolls shows in tenFrame game', function() {
    var frame = new Frame(1, 3)
    var frame = new Frame(2, 9)
    endFrame = frame.getEndFrame()
    expect(game.getTenFrames(endFrame)).toContain([2, 9])
  })

});
