describe('Scoreboard', function() {
  var game;
  // var frameOne;
  // var frameTwo;

  beforeEach(function() {
    game = new Game();
    // frameOne = new Frame();
    // frameTwo = new Frame();
  });

  it('opens with 10 frames allowed', function() {
    expect(game.allowedFrames).toEqual(10);
  });

  it('keeps score of frames', function() {
    game.addFrame();
    expect(game.frames.length).toEqual(1);
    expect(game.allowedFrames).toEqual(9);
  });

  it('keeps score of multiple frames', function() {
    game.addFrame();
    game.addFrame();
    expect(game.allowedFrames).toEqual(8);
    expect(game.frames.length).toEqual(2);
  });

  it('does not accept more frames than 10', function() {
    game.launchGame();
    expect(game.addFrame()).toEqual('NOPE');
  });

  it('launches game with 10 frames', function() {
    game.launchGame();
    expect(game.frames.length).toEqual(10);
  });

  xit('adds scores to scoreboard')

  xit('runs game')

  xit('back updates scoreboard')

});