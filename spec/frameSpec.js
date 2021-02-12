"use strict";

describe('Frame', function() {
  let frame;
  
  beforeEach(function() {
    frame = new Frame();
  });

  describe('update', function() {
    it('updates rollOne after one roll', function() {
      frame.update(6);
      expect(frame._rollOne).toEqual(6);
    });
    it('updates rollTwo after two rolls', function() {
      frame.update(6);
      frame.update(3);
      expect(frame._rollTwo).toEqual(3);
    });
  })

  describe('isFinished', function() {
    it('returns true after two rolls', function() {
      frame.update(6);
      frame.update(3);
      expect(frame.isFinished()).toBe(true);
    });
    it('returns true after strike', function() {
      frame.update(10);
      expect(frame.isFinished()).toBe(true);
    });
    it('returns false after one, non-strike roll', function() {
      frame.update(1);
      expect(frame.isFinished()).toBe(false);
    });
  });

  describe('isSpare, isStrike', function() {
    it('isStrike returns true after strike', function() {
      frame.update(10);
      expect(frame.isStrike()).toBe(true);
    });
    it('isSpare returns true after spare', function() {
      frame.update(9);
      frame.update(1);
      expect(frame.isSpare()).toBe(true);
    });
    it('isSpare returns false after strike', function() {
      frame.update(10);
      expect(frame.isSpare()).toBe(false);
    });
  });

  describe('score', function() {
    it('returns correct score', function() {
      frame.update(4);
      frame.update(4);
      expect(frame._score).toEqual(8);
    })
  });
});