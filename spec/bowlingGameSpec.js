describe("bowlingGame", function() {
  var game;

  beforeEach(function() {
  game = new BowlingGame();
  });

  describe("#bowl", function() {
    it("player can bowl and return a score", function() {
      game.bowl(7);
      expect(game.totalScore).toEqual(7);
    });

    it("player can bowl a gutter ball and return a 0 score", function() {
      game.bowl(0);
      expect(game.totalScore).toEqual(0);
    });


  });



});
