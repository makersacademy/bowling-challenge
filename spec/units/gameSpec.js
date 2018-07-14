describe("game.js", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe(".addFrame", function() {
    it("adds the frame to an array", function() {
      game.addFrame({first_roll: 2, second_roll: 2});
      expect(game.frames).toEqual([{first_roll: 2, second_roll: 2}]);
    });
  });

  describe(".total", function() {
    it("returns the total score", function() {
      for (i = 0; i < 10; i++) {
        game.addFrame({first_roll: 2, second_roll: 2});
      }
      expect(game.total).toEqual(40);
    });
  });
});
