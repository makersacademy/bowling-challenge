'use strict';

describe('Frame', function() {
  var frame, finalFrame;

  beforeEach(function() {
    frame = new Frame(1);
    finalFrame = new Frame(10);
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

    it('has zero pins recorderd for first extra roll', function() {
      expect(frame.getFirstExtraRoll()).toEqual(0);
    });

    it('has zero pins recorderd for second extra roll', function() {
      expect(frame.getSecondExtraRoll()).toEqual(0);
    });

    it('is not a strike', function() {
      expect(frame.isAStrike()).toBe(false);
    });

    it('is not a spare', function() {
      expect(frame.isASpare()).toBe(false);
    });

    it('has a score of zero', function() {
      expect(frame.getScore()).toEqual(0);
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

    it('is a strike if 10 pins are knocked down', function() {
      frame.setFirstRoll(10);
      expect(frame.isAStrike()).toBe(true);
    });

    it('is not a strike if less than 10 pins are knocked down', function() {
      frame.setFirstRoll(6);
      expect(frame.isAStrike()).toBe(false);
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

    it('is a spare if 10 pins are knocked down', function() {
      frame.setFirstRoll(6);
      frame.setSecondRoll(4);
      expect(frame.isASpare()).toBe(true);
    });

    it('is not a spare if less than 10 pins are knocked down', function() {
      frame.setFirstRoll(6);
      frame.setSecondRoll(3);
      expect(frame.isASpare()).toBe(false);
    });

    it('is open if less than 10 pins are knocked down', function() {
      frame.setFirstRoll(6);
      frame.setSecondRoll(3);
      expect(frame.isOpen()).toBe(true);
    });
  });

  describe('setFirstExtraRoll', function() {
    it('cannot be set for frames 1 - 9',function() {
      expect(function() { frame.setFirstExtraRoll(5); }).toThrowError('Extra first roll only available for final frame');
    });

    it('cannot be set for final frame if it is Open', function() {
      expect(function() { finalFrame.setFirstExtraRoll(5); }).toThrowError('Extra first roll only available for bonus final frame');
    });

    it('cannot be set to more than 10 pins', function() {
      expect(function() { frame.setFirstExtraRoll(11); }).toThrowError('Pins cannot exceed a maximum of 10');
    });

    it('can be set for final frame if it is a Spare', function() {
      finalFrame.setFirstRoll(6);
      finalFrame.setSecondRoll(4);
      finalFrame.setFirstExtraRoll(5);
      expect(finalFrame.getFirstExtraRoll()).toEqual(5);
    });

    it('can be set for final frame if it is a Strike', function() {
      finalFrame.setFirstRoll(10);
      finalFrame.setFirstExtraRoll(5);
      expect(finalFrame.getFirstExtraRoll()).toEqual(5);
    });
  });

  describe('setSecondExtraRoll', function() {
    it('cannot be set for frames 1 - 9',function() {
      expect(function() { frame.setSecondExtraRoll(5); }).toThrowError('Extra second roll only available for final frame');
    });

    it('cannot be set for final frame if is Open', function() {
      expect(function() { finalFrame.setSecondExtraRoll(5); }).toThrowError('Extra second roll only available for strike final frame');
    });

    it('cannot be set for final frame if is a Spare', function() {
      finalFrame.setFirstRoll(6);
      finalFrame.setSecondRoll(4);
      expect(function() { finalFrame.setSecondExtraRoll(5); }).toThrowError('Extra second roll only available for strike final frame');
    });

    it('cannot be set if the total of extra rolls is more than 10 pins', function() {
      expect(function() { frame.setSecondExtraRoll(11); }).toThrowError('Pins cannot exceed a maximum of 10');
    });

    it('can be set for final frame if it is a Strike', function() {
      finalFrame.setFirstRoll(10);
      finalFrame.setFirstExtraRoll(2);
      finalFrame.setSecondExtraRoll(3);
      expect(finalFrame.getSecondExtraRoll()).toEqual(3);
    });
  });

  describe('calculate score', function() {
    beforeEach(function() {
      frame.setFirstRoll(6);
      frame.setSecondRoll(4);
    });

    it('calculates score given previous total and bonus', function() {
      frame.calculateScore(0,7); //Frame 1: 6 4, Frame 2: 7
      expect(frame.getScore()).toEqual(17);
    });

    it('throws an error if previous total is missing', function() {
      expect(function() { frame.calculateScore(); }).toThrowError('Previous total required');
    });

    it('throws an error if bonus is missing for a strike/spare frame', function() {
      expect(function() { frame.calculateScore(0); }).toThrowError('Bonus required');
    });

    it('does not throw an error if bonus is missing for an open frame', function() {
      frame.setSecondRoll(3);
      frame.calculateScore(0);
      expect(frame.getScore()).toEqual(9);
    });
  });
});
