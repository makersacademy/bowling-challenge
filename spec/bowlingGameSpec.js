'use strict';

describe("BowlingGame", function () {
  var game;
  var frame;

  beforeEach(function() {
    frame = new Frame();
    game = new BowlingGame(frame);
  });
  
  describe('frameNumber', function () {
    it("goes to the next frame if the player rolls a strike on first roll", function () {
      game.frame(frame.roll(10));
      expect(game.frameNumber).toEqual(2);
    });

    it("stays on the same frame if the player rolls > 0 and < 10 pins", function () {
      game.frame(frame.roll(5));
      expect(game.frameNumber).toEqual(1);
    });

    it("stops at the 10th frame", function () {
      game.frameNumber += 9;
      game.frame(frame.roll(10));
      expect(game.frameNumber).toEqual(10);
    });

  });

});