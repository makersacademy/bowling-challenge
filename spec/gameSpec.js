describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("Adding frames", function() {
    it("starts with an empty array of frames by default", function() {
      expect(game.checkAllScores()).toEqual([]);
    });

    it("rolling adds a frame to frames array", function() {
      game.calculateFrameTotal(4, 5);
      expect(game.checkAllScores().length).toEqual(1);
    });

    it("adds the scores for 1 frame", function() {
      game.calculateFrameTotal(3, 3);
      expect(game.checkAllScores()[0]).toEqual(6)
    });
  });

  describe("Recording strikes and spares", function() {
    it("records a strike as X when first roll is 10 points", function() {
      game.calculateFrameTotal(10);
      expect(game.checkAllScores()[0]).toEqual("X");
      expect(game._isStrike(10)).toEqual(true);
    });

    it("records a spare as a total of 10 when both rolls equal 10", function() {
      game.calculateFrameTotal(1, 9);
      expect(game.checkAllScores()[0]).toEqual(10);
      expect(game._isSpare(1, 9)).toEqual(true);
    });
  });

  describe("End of game", function() {
    it("throws an error when trying to add 11th frame", function() {
      for (var i = 1; i <= 10; i++) {
        game.calculateFrameTotal(2, 6);
      }
      expect(function() {game.calculateFrameTotal(4, 5);}).toThrowError("Game over!");
    });
  });



});
