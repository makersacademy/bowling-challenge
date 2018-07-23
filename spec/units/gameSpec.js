describe("Game", function() {
  var game;
  var DummyFrame = function () { this.secondRoll = 0; this.complete = false; };
  var dummyFrame;

  DummyFrame.prototype.result = function () {};
  DummyFrame.prototype.addRoll = function () {};
  DummyFrame.prototype.score = function () { return 8; };

  beforeEach (function () {
    dummyFrame = new DummyFrame ();
    game = new Game (dummyFrame);
  });

  describe(".getRoll", function () {
    it("creates a new frame on first roll", function () {
      spyOn(game, '_createNewFrame').and.returnValue(dummyFrame);
      game.getRoll(3);
      expect(game._createNewFrame).toHaveBeenCalledWith(3);
    });

    it("sets the roll on the frame on second roll", function () {
      game.getRoll(3);
      spyOn(dummyFrame, 'addRoll');
      game.getRoll(7);
      expect(dummyFrame.addRoll).toHaveBeenCalledWith(7);
    });
  });

  describe(".returnScore", function () {
    it("returns the total score", function () {
      game.getRoll(3);
      dummyFrame.complete = true;
      game.getRoll(5);
      expect(game.returnScore()).toEqual(8);
    });
  });
});
