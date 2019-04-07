'use strict';

describe("BowlingGame", function () {
  var game;
  var frame;

  beforeEach(function() {
    frame = new Frame();
    game = new BowlingGame();
  });
  
  describe('addFrame', function () {

    it("adds a frame", function () {
      game.addFrame(frame);
      expect(game.frames).toEqual([frame]);
    });

  });

  describe('score', function () {

    it("returns a score for a gutter game", function () {
      var gutterFrame = [0,0];
      game.addFrame(gutterFrame);
      game.addFrame(gutterFrame);
      game.addFrame(gutterFrame);
      game.addFrame(gutterFrame);
      game.addFrame(gutterFrame);
      game.addFrame(gutterFrame);
      game.addFrame(gutterFrame);
      game.addFrame(gutterFrame);
      game.addFrame(gutterFrame);
      game.addFrame(gutterFrame);
      expect(game.score()).toEqual(0);
    });

  });

});