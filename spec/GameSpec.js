describe("Game", function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  it("game begins with a score of 0", function() {
    expect(game.getTotalScore()).toEqual(0);
  });

  describe("#begin", function() {
    it("initialises frame 1", function() {
      game.begin();
      expect(game.frame).toEqual(new Frame(1));
    });
  });

	describe("#nextFrame", function() {
    it("increases current frame by one", function() {
      game.begin();
      game.nextFrame();
      expect(game.frame).toEqual(new Frame(2));
    });
  });
});
