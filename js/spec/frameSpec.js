'use strict';

describe('Frame', function() {
  let frame;

  beforeEach(function() {
    frame = new Frame
  })

  describe('score', function() {
    it('calculates the score after 1 roll', function() {
      frame.addRoll(5)
      expect(frame.score()).toBe(5)
    });
  });
});
