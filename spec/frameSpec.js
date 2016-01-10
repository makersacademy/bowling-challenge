'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('#standingPins', function() {
    it('has an initial value of 10', function() {
      expect(frame.standingPins).toEqual(10);
    });
  });

  describe('#knockedPins', function() {
    it('has an initial value of 0', function() {
      expect(frame.knockedPins).toEqual(0);
    });
  });

  describe('#getStandingPins', function() {
    it('returns the number of standing pins', function() {
      expect(frame.getStandingPins()).toEqual(10);
    });
  });

  describe('#getKnockedPins', function() {
    it('returns the number of knocked pins', function() {
      expect(frame.getKnockedPins()).toEqual(0);
    });
  });

  describe('#isValidNumber', function() {
    it('returns true only with positive integers between 0 and 10', function() {
      expect(frame.isValidNumber(-1)).toEqual(false);
      expect(frame.isValidNumber(11)).toEqual(false);
      expect(frame.isValidNumber(3.2)).toEqual(false);
      expect(frame.isValidNumber('one')).toEqual(false);
      expect(frame.isValidNumber(3)).toEqual(true);
    });
  });

  describe('#setKnockedPins', function() {
    it('throws an error if passed an invalid value', function() {
      var error = 'Only valid numbers: no cheating, please XD'
      expect(function() { frame.setKnockedPins(-1) }).toThrowError(error);
      expect(function() { frame.setKnockedPins(11) }).toThrowError(error);
      expect(function() { frame.setKnockedPins(3.2) }).toThrowError(error);
      expect(function() { frame.setKnockedPins('one') }).toThrowError(error);
    });

    it('sets the number of knocked pins', function() {
      frame.setKnockedPins(4);
      expect(frame.getKnockedPins()).toEqual(4)
    });
  });
});
