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

  it('should reset currentFrameObject to null after second roll of frame', function() {
    game.rollBall(2);
    game.rollBall(2);
    expect(game.currentFrameObject).toEqual(null);
  });

  it('should start with game over set to false', function() {
    expect(game.isGameOver).toEqual(false);
  });

  it('should set game over to true at the end of round 9 if player does not have a strike', function() {
    for (var i = 0; i <= 19; i++)
    game.rollBall(2);
    expect(game.isGameOver).toEqual(true);
  });

  it('should add the score of the first frame to totalScore', function() {
    game.rollBall(2);
    game.rollBall(2);
    expect(game.totalScore).toEqual(4);
  });

  it('should add the score of the second frame to totalScore if there is no strike/spare', function() {
    for (var i = 0; i <= 3; i++)
    game.rollBall(2);
    expect(game.totalScore).toEqual(8);
  });

  it('should immediately push the frame in in the event of a strike', function() {
    game.rollBall(10);
    expect(game.scoreSheet[0]).toEqual(jasmine.any(Frame));
  });

  it('should increase strike count by one in the event of a strike', function() {
    game.rollBall(10);
    expect(game.strikeCount).toEqual(1);
  });

  it('should reset strike count to 0 when there is no strike', function() {
    game.rollBall(10);
    game.rollBall(5);
    game.rollBall(5);
    expect(game.strikeCount).toEqual(0);
  });

  it('should calculate the score correctly if previous four frames were a strike', function() {
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(2);
    game.rollBall(2);
    expect(game.totalScore).toEqual(100);
  });

});
