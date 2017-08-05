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
});
