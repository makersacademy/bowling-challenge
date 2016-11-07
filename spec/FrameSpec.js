'use strict';

describe("Frame", function () {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("default status", function () {

    it("score is zero", function() {
      expect(frame.score).toEqual(0);
    });

    it('rolls completed is zero', function() {
      expect(frame.rollsCompleted).toEqual(0);
    });

    it('is not complete', function() {
      expect(frame.isComplete).toBe(false);
    });
  });

  describe("first roll", function () {

    beforeEach(function() {
      frame.addRollOneScore(8);
    });

    it('adds the score from roll one', function() {
      expect(frame.score).toEqual(8);
    });

    it('sets rolls completed to one', function() {
      expect(frame.rollsCompleted).toEqual(1);
    });

    it('calculates the pins remaining', function() {
      expect(frame.pinsRemaining).toEqual(2);
    });
  });

  describe("simple frame completion", function () {

    beforeEach(function() {
      frame.addRollOneScore(8);
      frame.addRollTwoScore(1)
    });

    it('adds the score from roll two', function() {
      expect(frame.score).toEqual(9);
    });

    it('sets rolls completed to two', function() {
      expect(frame.rollsCompleted).toEqual(2);
    });

    it('knows the frame is complete', function() {
      expect(frame.isComplete).toBe(true);
    });

    it('calculates the pins remaining', function() {
      expect(frame.pinsRemaining).toEqual(1);
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

    it('calculates the pins remaining', function() {
      expect(frame.pinsRemaining).toEqual(0);
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

    it('calculates the pins remaining', function() {
      expect(frame.pinsRemaining).toEqual(0);
    });
  });

  describe("calculates number of remaining pins", function() {

    it("for the user to target in the second roll", function() {
      frame.addRollOneScore(7);
      expect(frame.pinsRemaining).toEqual(3);
    })
  });
});
