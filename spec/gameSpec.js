describe("game", function() {
  describe("adding frames to game", function() {
    it("should display the list of games", function() {
      game = new Game();
      game.newFrame(2,3);
      expect(game.showGamesFrames()).toEqual([[2,3]]);
    });

    it("should be able to handle more than one frame", function() {
      game = new Game();
      game.newFrame(2,3);
      game.newFrame(10, null);
      game.newFrame(3,7);
      expect(game.showGamesFrames()).toEqual([[2,3], [10, null], [3,7]])
    })

    it("should be able to tell if a frame is a strike / spare from game", function() {
      game = new Game();
      game.newFrame(2,3);
      game.newFrame(10, null);
      game.newFrame(3,7);
      expect(game.framesList[2].isASpare()).toEqual(true);
      expect(game.framesList[1].isAStrike()).toEqual(true);
    });

    it("should restrict the length of a game to 10 frames", function() {
      var game = new Game();
      for(var i = 1; i <= NUMBER_OF_FRAMES; i++) {
        game.newFrame(2,3);
      };
      expect(function() {
        game.newFrame(2,3);
      }).toThrowError("Game has finished");
    })
  });
});
