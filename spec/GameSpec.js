describe("Game", function() {
  var game;
  var frame;
  var score

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
    score = new Score();
  });

  it("game begins with a score of 0", function() {
    game.begin();
    expect(game.getTotalScore()).toEqual(0);
  });

  describe("#begin", function() {
    it("initialises frame 1", function() {
      game.begin();
      expect(game.frame).toEqual(new Frame(1));
    });
    it("instantiates a score object", function() {
      game.begin();
      expect(game.score).toEqual(new Score());
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
