describe('Game', function() {
  beforeEach(function() {
    game = new Game();
  });

  it('starts with a score of 0', function() {
    expect(game.overallScore).toEqual(0);
  });

  it('generates all the frames when there are no strikes or spares at the end', function() {
    expect(game.loadFrames([3, 5, 10, 5, 5, 3, 5, 6, 2, 2, 3, 5, 4, 7, 1, 7, 1, 6, 2]).length).toEqual(10);
  });

  it('generates all the frames when there is a strike at the end followed by another strike', function() {
    expect(game.loadFrames([3, 5, 10, 5, 5, 3, 5, 6, 2, 2, 3, 5, 4, 7, 1, 7, 1, 10, 10, 1]).length).toEqual(12);
  });

  it('generates all the frames when there is a strike at the end followed by two normal rolls', function() {
    expect(game.loadFrames([3, 5, 10, 5, 5, 3, 5, 6, 2, 2, 3, 5, 4, 7, 1, 7, 1, 10, 1, 1]).length).toEqual(11);
  });

  it('generates all the frames when there is a spare at the end followed by a roll', function() {
    expect(game.loadFrames([3, 5, 10, 5, 5, 3, 5, 6, 2, 2, 3, 5, 4, 7, 1, 7, 1, 5, 5, 1]).length).toEqual(11);
  });

  it('calculates the final score', function() {
    game.allFrames = game.loadFrames([3, 5, 10, 5, 5, 3, 5, 6, 2, 2, 3, 5, 4, 7, 1, 7, 1, 6, 2]);
    game.calculateScores();
    expect(game.calculateOverallScore()).toEqual(95);
  });

  it('adds the extra bonus if the 10th frame is a strike', function() {
    game.allFrames = game.loadFrames([3, 5, 10, 5, 5, 3, 5, 6, 2, 2, 3, 5, 4, 7, 1, 7, 1, 10, 2, 3]);
    game.calculateScores();
    expect(game.calculateOverallScore()).toEqual(102);
  });

  it('adds the extra bonus if the 10th frame is a spare', function() {
    game.allFrames = game.loadFrames([3, 5, 10, 5, 5, 3, 5, 6, 2, 2, 3, 5, 4, 7, 1, 7, 1, 5, 5, 3]);
    game.calculateScores();
    expect(game.calculateOverallScore()).toEqual(100);
  });

  it('calculates the score for the perfect game', function() {
    game.allFrames = game.loadFrames([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
    game.calculateScores();
    expect(game.calculateOverallScore()).toEqual(300);
  });
});
