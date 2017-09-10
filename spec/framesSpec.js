'use strict';

describe('Frames Class', function() {
  describe('Init Unit Tests', function() {

    var frames;
    var game;

    beforeEach(function() {
      game = new Game();
      frames = new Frames();
    });

    it('frame scores starts empty', function() {
      expect(frames.getFrameScores()).toEqual([]);
    });

    it('frame totals starts empty', function() {
      expect(frames.getFrameTotals()).toEqual([]);
    });

    it('it current roll starts at 0', function() {
      expect(frames.getCurrentRoll()).toEqual(0);
    });

    it('score per frame is recorded', function() {
      // mock
      game.roll(5);
      expect(game.frames.getFrameScores()).toEqual([5]);
    });

    it('frame totals are recorded', function() {
      game.roll(5);
      game.roll(5);
      expect(game.frames.getFrameTotals()).toEqual([10]);
    });

    it('frame totals aren\'t recorded before frame complete', function() {
      game.roll(5);
      expect(game.frames.getFrameTotals()).toEqual([0]);
    });

  describe('.resetTest', function() {
    it('frame scores reset after a gutter game', function() {
      var i = 0;

      for (i = 0; i < 21; i++) {
            game.roll(0);
                               }
       game.frames.resetTest;
     expect(game.frames.getFrameScores()).toEqual([]);
    });
  });

  });
});
