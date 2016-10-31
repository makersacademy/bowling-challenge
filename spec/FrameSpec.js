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

  describe("strikes", function() {

    beforeEach(function() {
      frame.addRollOneScore(10);
    });

    it('knows when a strike has been achieved', function() {
      expect(frame.isStrike).toBe(true);
    });

    it('marks frame as complete when a strike has been achieved', function() {
      expect(frame.isComplete).toBe(true);
    });

    it('witholds the score for the frame until the bonus has been calculated', function() {
      expect(frame.score).toEqual(0);
      expect(frame.pendingScore).toEqual(10);
    });

  });

  describe("spares", function() {

    beforeEach(function() {
      frame.addRollOneScore(5);
      frame.addRollTwoScore(5)
    });

    it('knows when a spare has been achieved', function() {
      expect(frame.isSpare).toBe(true);
    });

    it('witholds the score for the frame until the bonus has been calculated', function() {
      expect(frame.score).toEqual(0);
      expect(frame.pendingScore).toEqual(10);
    });

  });
});
