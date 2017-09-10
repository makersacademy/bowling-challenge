'use strict';

describe('Frames Class', function() {
  describe('Init Unit Tests', function() {

    var frames;
    var game;

    beforeEach(function() {
      game = new Game();
      frames = new Frames();
    });

    it('frames starts empty', function() {
      expect(frames.getAllFrameScores()).toEqual([]);
    });

    it('score per frame is recorded', function() {
      // mock
      game.roll(5);
      expect(game.frames.getAllFrameScores()).toEqual([5]);
    });

  });
});
