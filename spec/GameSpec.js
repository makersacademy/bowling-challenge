describe("Game", function() {

  beforeEach(function() {
    game = new Game;
  });

  it("is defined", function() {
    expect(game).toBeDefined();
  });

  describe("score", function() {

    it("is defined", function() {
      expect(game.score).toBeDefined();
    });

    it("is 0 when game starts", function () {
      expect(game.score).toEqual(0);
    });

    it("remembers score after every roll", function() {
      game.roll(1);
      game.roll(5);
      expect(game.score).toEqual(6);
    });

    it("returns a current frame", function() {
      var game = new Game;
      game.roll(1);
      game.roll(3);
      expect(game.currentFrame).toEqual([1, 3]);
    });

  });

});
