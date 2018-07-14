describe("game.js", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe(".total", function() {
    it("returns the total score", function() {
      for (i = 0; i < 10; i++) {
        game.frames.push({first_roll: 2, second_roll: 2});
      }
      expect(game.total).toEqual();
    });
  });
});
