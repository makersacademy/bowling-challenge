describe('Game', function() {
  beforeEach(function() {
    game = new Game();
  });

  it('starts with a score of 0', function() {
    expect(game.overallScore).toEqual(0);
  });

  it('generates all the frames', function() {
    expect(game.loadFrames([3, 5, 10, 5, 5, 3, 5, 6, 2, 2, 3, 5, 4, 7, 1, 7, 1, 6, 2]).length).toEqual(10);
  });

  it('calculates the final score', function() {
    game.allFrames = game.loadFrames([3, 5, 10, 5, 5, 3, 5, 6, 2, 2, 3, 5, 4, 7, 1, 7, 1, 6, 2]);
    game.calculateScores();
    expect(game.calculateOverallScore()).toEqual(95);
  });

  it('adds the extra bonus if the 10th frame is a strike', function() {
    game.allFrames = game.loadFrames([3, 5, 10, 5, 5, 3, 5, 6, 2, 2, 3, 5, 4, 7, 1, 7, 1, 10]);
    game.calculateScores();
    expect(game.calculateOverallScore()).toEqual(117);
  });

  it('adds the extra bonus if the 10th frame is a spare', function() {
    game.allFrames = game.loadFrames([3, 5, 10, 5, 5, 3, 5, 6, 2, 2, 3, 5, 4, 7, 1, 7, 1, 5, 5]);
    game.calculateScores();
    expect(game.calculateOverallScore()).toEqual(107);
  });
});
