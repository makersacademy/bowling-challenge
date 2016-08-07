'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('Roll score', function() {

    it('has a default score of zero', function() {
      expect(frame.rollScore).toEqual(0);
    });

    it('can add the pins knocked down to the roll score', function() {
      frame.roll(8);
      expect(frame.rollScore).toEqual(8);
    });

    it('knows when the roll is a strike', function() {
      frame.roll(frame.DEFAULT_PIN_COUNT);
      expect(frame.isStrike()).toBeTruthy();
    });

    it('knows when the roll is a spare', function() {
      var remaining;
      remaining = (frame.DEFAULT_PIN_COUNT - 1);
      frame.roll(1);
      frame.roll(remaining);
      expect(frame.isSpare()).toBeTruthy();
    });
  });

  describe('Frame score', function() {

    it('has a default score of zero', function() {
      expect(frame.frameScore).toEqual(0);
    });

    it('can return a score for the frame', function() {
      frame.roll(7);
      expect(frame.getFrameScore()).toEqual(7);
    });

    it('can add the roll score to the frame score', function() {
      frame.roll(8);
      //frame.addRoll();
      expect(frame.getFrameScore()).toEqual(8);
    });
  });

  describe ('Pin count', function() {
    it('has a default pin count at the beginning of the frame', function() {
      expect(frame.getPinCount()).toEqual(frame.DEFAULT_PIN_COUNT);
    });

    it('knows how many pins remain after a roll', function() {
      frame.roll(8);
      expect(frame.getPinCount()).toEqual(2);
    });
  });

  describe('Roll count', function() {

    it('has a default roll count of zero', function() {
      expect(frame.rollCounter).toEqual(0);
    });

    it('can return the number of rolls taken in the frame', function() {
      frame.roll(5);
      frame.roll(5);
      expect(frame.rollCounter).toEqual(2);
    });

    it('knows when the roll is the first one taken', function() {
      frame.roll(6);
      expect(frame.isFirstRoll()).toBeTruthy();
    });
  });
});
