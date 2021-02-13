"use strict";

describe('FrameTen', function() {
  let frameTen;
  
  beforeEach(function() {
    frameTen = new FrameTen();
  });

  describe("rollThree", function() {
    it('returns null at first', function() {
      expect(frameTen._rollThree).toEqual(null);
    });
  });

  describe("update", function() {
    it('no strike/spare', function() {
      frameTen.update(5);
      frameTen.update(4);
      expect(frameTen._score).toEqual(9);
    });
    it('strike then 2 non-ten rolls', function() {
      frameTen.update(10);
      frameTen.update(4);
      frameTen.update(4);
      expect(frameTen._score).toEqual(18);
    });
    it('spare then 1 non-ten roll', function() {
      frameTen.update(6);
      frameTen.update(4);
      frameTen.update(4);
      expect(frameTen._score).toEqual(14);
    });
  });

  describe("isFinished", function() {
    it('returns false if strike', function() {
      frameTen.update(10);
      expect(frameTen.isFinished()).toBe(false);
    });
    it('returns false if strike, then non-strike', function() {
      frameTen.update(10);
      frameTen.update(5);
      expect(frameTen.isFinished()).toBe(false);
    });
    it('returns false if spare', function() {
      frameTen.update(5);
      frameTen.update(5);
      expect(frameTen.isFinished()).toBe(false);
    });
    it('returns true if spare and 3 rolls', function() {
      frameTen.update(5);
      frameTen.update(5);
      frameTen.update(5);
      expect(frameTen.isFinished()).toBe(true);
    });
    it('returns true if strike and 3 rolls', function() {
      frameTen.update(10);
      frameTen.update(5);
      frameTen.update(5);
      expect(frameTen.isFinished()).toBe(true);
    });
    it('returns true if no spare/stirke and 2 rolls', function() {
      frameTen.update(5);
      frameTen.update(4);
      expect(frameTen.isFinished()).toBe(true);
    });
  });

});