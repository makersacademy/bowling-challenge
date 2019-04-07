'use strict';

describe("BowlingGame", function () {
  var game;
  var frame;

  beforeEach(function() {
    frame = new Frame();
    game = new BowlingGame();
  });
  
  describe('addFrame', function () {
    it("adds a new frame", function () {
      game.addFrame(frame);
      expect(game.frames).toEqual([frame]);
    });
  });

});