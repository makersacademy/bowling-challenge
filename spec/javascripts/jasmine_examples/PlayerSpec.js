describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("scoring during a game", function() {
    it("can have a initial score of 0", function() {
      expect(game.current_score).toEqual(0);
    });

    it("starts on the first frame", function() {
      expect(game.current_frame).toEqual(1);
    })
  });
});
