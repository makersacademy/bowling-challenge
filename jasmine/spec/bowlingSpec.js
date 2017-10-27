describe("BowlingGame", function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it('score starts as 0', function() {
    expect(game.score()).toEqual(0);
  });

  it('starts with an empty scorecard', function() {
    expect(game.showScoreCard()).toEqual([]);
  });

  it('keeps score', function() {
    game.roll(4);
    expect(game.scoreCard[0].rollOne).toEqual(4);
  });

});
