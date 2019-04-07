describe("Game", function() {
  var game;

  beforeEach(function() {
    scoreCard = new ScoreCard();
    game = new Game(scoreCard);
  });

  it("starts a game with an empty scorecard", function() {
    expect(game.start()).toBe(true);
    expect(game.seeRolls()).toEqual([]);
  });
});
