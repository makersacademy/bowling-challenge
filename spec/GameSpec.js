describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("consists of frames", function() {
    it("with a gutter game", function() {
      game.registerRoll(0);
      expect(game.remainingPins()).toEqual(10);
    });

    it("with one registered roll", function() {
      game.registerRoll(7);
      expect(game.remainingPins()).toEqual(3);
    });

    it("with two registered rolls", function() {
      game.registerRoll(3);
      game.registerRoll(5);
      expect(game.remainingPins()).toEqual(2);
    });
  });

  describe("is over", function() {
    it("after two rolls", function() {
      game.registerRoll(3);
      game.registerRoll(2);
      expect(game.isOver()).toEqual(true);
    });

    it("after a strike", function() {
      game.registerRoll(10);
      expect(game.isOver()).toEqual(true);
    });

    it("after a spare", function() {
      game.registerRoll(7);
      game.registerRoll(3);
      expect(game.isOver()).toEqual(true);
    });
  });

  describe("is not over", function() {
    it("after less than two rolls", function() {
      game.registerRoll(4);
      expect(game.isOver()).toEqual(false);
    });
  });

  describe("has the total score", function() {
    it("for one frame", function() {
      game.registerRoll(2);
      game.registerRoll(6);
      expect(game.totalFrame()).toEqual(8);
    });

    it("for several frames", function() {
      var frameOne = { total : function() { return 7 } };
      var frameTwo = { total : function() { return 6 } };
      game.addFrame(frameOne);
      game.addFrame(frameTwo);
      expect(game.totalScore()).toEqual(13)
    });
  });

  it("has a strike in a frame", function() {
    game.registerRoll(10);
    expect(game.isStrike()).toEqual(true);
  });

  it("has a spare in a frame", function() {
    game.registerRoll(8);
    game.registerRoll(2);
    expect(game.isSpare()).toEqual(true);
  });
});