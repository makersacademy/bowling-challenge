describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("has 10 empty frames when the game starts", function() {
    game.start(10);
    expect(game.frames.length).toEqual(10);
  });

  describe("enters bowl scores", function() {
    it("enters a first bowl into a frame", function() {
      game.start(10);
      game.roll(1,3);
      expect(game.frames[0].bowls).toEqual([3])
    });

    it("enters a second bowl into a frame", function() {
      game.start(10);
      game.roll(1,3);
      game.roll(1,4);
      expect(game.frames[0].bowls).toEqual([3,4])
    });
  });
});
