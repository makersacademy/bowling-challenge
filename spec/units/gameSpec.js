describe("Game", function() {
  var game;
  var DummyFrame = function () { this.score = 8; };

  DummyFrame.prototype.result = function () {};

  beforeEach(function() {
    var dummyFrame = new DummyFrame();
    spyOn(Game.prototype, "_createNewFrame").and.returnValue(dummyFrame);
    game = new Game();
  });

  describe(".enterRolls", function() {
    it("creates a new frame", function() {
      var dummyFrame = new DummyFrame();
      game.enterRolls(3, 5);
      expect(game._frames).toContain(dummyFrame);
    });
  });

  describe(".returnScore", function() {
    it("returns the total score", function() {
      for (i = 0; i < 10; i++) {
        game.enterRolls(3, 5);
      }
      expect(game.returnScore()).toEqual(80);
    });
  });
});
