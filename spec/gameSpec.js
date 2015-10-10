describe('Player', function() {

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  it('should start with a frame index of -1', function() {
    expect(game.frameIndex).toEqual(-1);
  });

  it('logRoll should +1 to frameIndex', function() {
    game.logRoll(1);
    expect(game.frameIndex).toEqual(0);
  });

  it('rollBoll should created a new frame', function() {
    game.rollBall(1);
    expect(game.scoreSheet).toContain(new Frame);
  })


  it('should start with an empty scoreSheet', function() {
    expect(game.scoreSheet).toEqual([]);
  });

  it('logRoll should store a new Frame object in scoreSheet if currentFrameObject is null', function() {
    game.logRoll(1);
    expect(game.scoreSheet).toContain(new Frame);
  });

  it('currentFrameObject should be null upon creation of game', function() {
    expect(game.currentFrameObject).toEqual(null);
  });

});
