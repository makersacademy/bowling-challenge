'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(1);
  });

  describe('constructor', function() {
    it('has an ID', function() {
      expect(frame.getID()).toEqual(1);
    });

    it('has zero pins recorded for first roll', function() {
      expect(frame.getFirstRoll()).toEqual(0);
    });

    it('has zero pins recorded for second roll', function() {
      expect(frame.getSecondRoll()).toEqual(0);
    });

  });

  describe('setFirstRoll', function() {
    it('can set first roll', function() {
      frame.setFirstRoll(6);
      expect(frame.getFirstRoll()).toEqual(6);
    });

    it('cannot set first roll to more than 10 pins', function() {
      expect(function() { frame.setFirstRoll(11); }).toThrowError('Pins cannot exceed a maximum of 10');
    });
  });

  describe('setSecondRoll', function() {
    it('can set second roll', function() {
      frame.setFirstRoll(6);
      frame.setSecondRoll(3);
      expect(frame.getSecondRoll()).toEqual(3);
    });

    it('cannot set second roll if the total is more than 10 pins', function() {
      frame.setFirstRoll(6);
      expect(function() { frame.setSecondRoll(5); }).toThrowError('Pins cannot exceed a maximum of 10');
    });
  });
});
