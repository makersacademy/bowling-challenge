
describe('BowlingGame', function() {
  var game;
  beforeEach(function() {
    game = new BowlingGame();
  });
  it("Rolls all 0's", function() {
    for (var i = 0; i < 20; i++) {
      game.roll(0)
    }
  expect(game.score()).toBe(0);  
  });
});
