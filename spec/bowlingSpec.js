'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('when playing', function() {
    it('records the score of roll one', function() {
      frame.play1(3);
      expect(frame.currentScore(frame.rollOne)).toEqual(3);
    });
    it('records the score of roll two', function() {
      frame.play2(6);
      expect(frame.currentScore(frame.rollTwo)).toEqual(6);
    });
  });
});
