describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("#addFrame", function() {
    it("adds a frame", function() {
      var frame = { total: function() { return [8, 2] } };
      game.addFrame(frame);
      expect(game.frames.length).toEqual(1);
    });
  });

  describe("#totalScore", function() {
    it("has the total score", function() {
      var frameOne = { total : function() { return 7 } };
      var frameTwo = { total : function() { return 6 } };
      game.addFrame(frameOne);
      game.addFrame(frameTwo);
      expect(game.totalScore()).toEqual(13);
    });
  });
});