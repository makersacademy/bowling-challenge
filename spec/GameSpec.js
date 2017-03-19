describe("Game", function() {

  beforeEach(function() {
    game = new Game;
  });

  it("is defined", function() {
    expect(game).toBeDefined();
  });

  it("stores the list of completed frames", function() {
    expect(game.completedFrames).toEqual([]);
  });

  describe("score", function() {

    it("is defined", function() {
      expect(game.score).toBeDefined();
    });

    it("is 0 when game starts", function () {
      expect(game.score).toEqual(0);
    });

    it("calculates scores after every frame", function() {
      frame = new Frame;
      game.roll(1);
      game.roll(5);
      expect(game.score).toEqual(6);
    });

  });

});
