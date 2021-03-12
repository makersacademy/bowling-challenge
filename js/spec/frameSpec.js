'use strict';

describe('Frame', function() {
  let frame;

  beforeEach(function() {
    let frameClass = require('../js/src/frame')
    frame = new frameClass;
    // frame = new Frame
  })

  describe('score', function() {
    it('calculates the score after 1 roll', function() {
      frame.addRoll(5)
      expect(frame.score()).toBe(5)
    });
  });
});
