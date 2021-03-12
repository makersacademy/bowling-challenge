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

  describe('isOver', function() {
    it('knows when it is over', function() {
      frame.addRoll(5)
      frame.addRoll(5)
      expect(frame.isOver()).toBe(true)
    });

    it('knows when it is not over', function() {
      frame.addRoll(5)
      expect(frame.isOver()).toBe(false)
    });
  });
});
