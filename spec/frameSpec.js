'use strict';

describe('Frame', function () {
  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  describe('#roll', function () {
    it('logs the roll for the frame', function () {
      frame.roll(5);
      expect(frame.getRoll(1)).toEqual(5);
    });

    // TODO: test exceptions
  });

  describe('#getRoll', function () {
    it('returns the outcome of the given roll', function () {
      frame.roll(5);
      frame.roll(4);
      expect(frame.getRoll(2)).toEqual(4);
    });
  });

  describe('#isComplete', function () {
    it('returns false if the player has not rolled twice', function () {
      frame.roll(5);
      expect(frame.isComplete()).toBeFalsy();
    });

    it('returns true if the player has rolled twice', function () {
      frame.roll(1);
      frame.roll(1);
      expect(frame.isComplete()).toBeTruthy();
    });
  });

  describe('#getScore', function () {
    it('returns the sum of rolls', function () {
      frame.roll(1);
      frame.roll(5);
      expect(frame.getScore()).toEqual(6);
    });
  });
});
