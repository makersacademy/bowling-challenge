'use strict';

describe("Frame", function () {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('defaults the frame score to zero', function() {
    expect(frame.score).toEqual(0);
  });

  it('adds the score from roll one', function() {
    frame.addRollOneScore(8);
    expect(frame.score).toEqual(8);
  });

  describe("completing a frame", function () {

    beforeEach(function() {
      frame.addRollOneScore(8);
      frame.addRollTwoScore(1)
    });

    it('adds the score from roll two', function() {
      expect(frame.score).toEqual(9);
    });

    it('knows the frame is complete', function() {
      expect(frame.isComplete).toBe(true);
    });
  });
});
