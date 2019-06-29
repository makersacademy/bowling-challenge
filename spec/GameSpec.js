describe('Scoreboard', function() {
  var game;
  var frameOne;
  var frameTwo;
  // var scoreboard;

  beforeEach(function() {
    game = new Game();
    frameOne = new Frame();
    frameTwo = new Frame();
 //   scoreboard = new Scoreboard();
  });

  it('opens with 10 frames', function() {
    expect(game.frames).toEqual(10);
  });

  it('keeps score of frames', function() {
    game.addFrame(frameOne);
    expect(game.frames).toEqual(9);
  });

  it('keeps score of multiple frames', function() {
    game.addFrame(frameOne);
    game.addFrame(frameTwo);
    expect(game.frames).toEqual(8);
  });

  it('does not accept more frames than 10', function() {
    for (var i = 0; i < 10; i++) {
      game.addFrame(frameOne);
    }
    expect(function(){ game.addFrame(frameOne); }).toThrowError('Your Game Has Ended');
  });
});