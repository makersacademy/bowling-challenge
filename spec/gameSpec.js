describe('Player', function() {

  beforeEach(function() {
    game = new Game();
  });

  it('should start with a frame index of -1', function() {
    expect(game.frameIndex).toEqual(-1);
  });

  it('logRoll should +1 to frameIndex', function() {
    game.logRoll(1);
    expect(game.frameIndex).toEqual(0);
  });

  it('should start with an empty scoreSheet', function() {
    expect(game.scoreSheet).toEqual([]);
  });

  it('currentFrameObject should be null upon creation of game', function() {
    expect(game.currentFrameObject).toEqual(null);
  });

  it('should only run the secondRoll and store it in scoreSheet if roll index is 1', function() {
    game.rollBall(0);
    game.rollBall(0);
    expect(game.scoreSheet[0]).toEqual(jasmine.any(Frame));
  });


});
