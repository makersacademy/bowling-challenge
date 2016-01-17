describe("bowlingGame", function() {
  var game;

  beforeEach(function() {
  game = new BowlingGame();
  });

  describe("#bowl", function() {
    it("player can bowl and return a score", function() {
      game.bowl(10);
      expect(game.totalScore).toEqual(10);
    });
  });

  

});
