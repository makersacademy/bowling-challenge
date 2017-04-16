describe("Game", function() {

  var game, allTurns;

  beforeEach(function() {
    game = new Game();
  });

  describe("default settings", function() {

    it("should start with a score of 0", function() {
      expect(game.scoreDefault).toEqual(0);
    });

  });

  describe("playing a game", function() {

    it("should score zero if all rolls hit no pins", function() {
      allTurns(20, 0);
      expect(game.score).toEqual(0);
    });

    it("should equal 20 if all rolls hit 1 pin", function() {
      allTurns(20, 1);
      expect(game.score).toEqual(20);
    });

  });


});
