'use strict';

describe('Frame', function() {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  describe('initialisation of a new frame', function() {
    it('creates a strike boolean variable and sets it to false', function() {
      expect(frame.strike).toBe(false);
    });

    it('creates a spare boolean variable and sets it to false', function() {
      expect(frame.spare).toBe(false);
    });

    it('creates an frameScore object for storing roll points', function() {
      expect(typeof frame.frameScore).toEqual('object');
      expect(frame.frameScore['roll1']).toEqual(0);
      expect(frame.frameScore['roll2']).toEqual(0);
    });

    it('creates a skipSecondRoll boolean and sets it to false', function() {
      expect(frame.skipSecondRoll).toBe(false);
    });
  });

  describe('strike functionality of each frame', function() {
    it('returns true in the case of strike', function() {
      expect(frame._isStrike(10)).toBe(true);
    });

    it('changes the state of the strike variable from false to true', function() {
      frame._isStrike(10);
      expect(frame.strike).toEqual(true);
    });

    it('adds 10 points to the first roll points', function() {
      frame._isStrike(10);
      expect(frame.frameScore['roll1']).toEqual(10);
    });

    it('returns false in the case of no strike', function() {
      expect(frame._isStrike(8)).toBe(false);
    });
  });

  describe('spare functionality of each frame', function() {
    it('returns true in the case of spare', function() {
      frame.firstRoll(8);
      expect(frame._isSpare(2)).toBe(true);
    });

    it('changes the state of the spare variable from false to true', function() {
      frame.firstRoll(8);
      frame._isSpare(2);
      expect(frame.spare).toEqual(true);
    });

    it('adds 10 points to the first and second roll points', function() {
      frame.firstRoll(8);
      frame._isSpare(2);
      expect(frame.frameScore['roll1']).toEqual(8);
      expect(frame.frameScore['roll2']).toEqual(2);
    });

    it('returns false in the case of no spare', function() {
      frame.firstRoll(5);
      expect(frame._isSpare(2)).toBe(false);
    });
  });

  describe('functionality for the first roll', function() {
    it('records the pins knocked down in the case of no strike', function() {
      frame.firstRoll(8);
      expect(frame.frameScore['roll1']).toEqual(8);
    });

    it('records 10 points in the case of strike', function() {
      frame.firstRoll(10);
      expect(frame.frameScore['roll1']).toEqual(10);
      expect(frame.strike).toBe(true);
    });

    it('changes the skipSecondRoll status to true in the case of a strike', function() {
      frame.firstRoll(10);
      expect(frame.skipSecondRoll).toBe(true);
    });

    it('changes the skipSecondRoll status to false in the case of no strike', function() {
      frame.firstRoll(8);
      expect(frame.skipSecondRoll).toBe(false);
    });
  });

  describe('functionality for the second roll', function() {
    it('returns nothing in the case of a strike', function() {
      frame.firstRoll(10);
      expect(frame.secondRoll()).toBe(undefined);
    });

    it('records the knocked down pins for roll 2', function() {
      frame.secondRoll(8);
      expect(frame.frameScore['roll2']).toEqual(8);
    });

    it('records the pin points in the case of a spare', function() {
      frame.firstRoll(8);
      frame.secondRoll(2);
      expect(frame.frameScore['roll1']).toEqual(8);
      expect(frame.frameScore['roll2']).toEqual(2);
    });

    it('changes the spare status to true', function() {
      frame.firstRoll(8);
      frame.secondRoll(2);
      expect(frame.spare).toBe(true);
    });
  });

  describe('summing the roll scores functionality', function() {
    it('returns the sum of the roll scores', function() {
      frame.firstRoll(8);
      frame.secondRoll(2);
      expect(frame.sumScores()).toEqual(10);
    });
  });
});
