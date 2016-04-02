"use strict";

describe("Game", function () {
  var game
  var frame

  beforeEach(function () {
    frame = jasmine.createSpyObj("frame", ["logRoll"]);
    game = new Game();
    game.currentFrame = frame;
  });

  it("should start with a zero score", function () {
    expect(game.sumScore()).toEqual(0);
  });

    it("logs rolls inside each frame", function () {
      game.logRoll(3);
      expect(game.currentFrame.logRoll).toHaveBeenCalledWith(3);
    });

  describe("Perfect Game", function () {
    xit("can calculate a Perfect Game", function () {
      for (var i = 1; i <= 12; i++) {
        game.logRoll(10);
      };
      expect(game.getScore()).toEqual(300);
    });
  });
});
