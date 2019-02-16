describe("Game Scorecard", function() {
  var game;

  beforeEach(function() {
  game = new Game();
});

it("should return total score as 0 for a gutter game", function() {
  for (var i = 0; i < 20; i++) {
    game.inputBowl(0);
  };
  expect(game.showTotalPoints()).toEqual(0);
});

});
