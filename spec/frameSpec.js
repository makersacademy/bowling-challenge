'use strict';

describe('Frame', function () {
  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  describe('#constructor', function () {
    it('can initialize a three-roll frame', function () {
      frame = new Frame(true);
      this.rollMany(frame, 2, 3);
      var thirdRoll = function () {
        frame.roll(3);
      };
      expect(thirdRoll).not.toThrowError('Invalid number of rolls');
    });
  });

  describe('#roll', function () {
    it('logs the roll for the frame', function () {
      this.rollMany(frame, 1, 5);
      expect(frame.getRoll(1)).toEqual(5);
    });

    describe('if player already rolled the max number of times', function () {
      it('throws an exception', function () {
        this.rollMany(frame, frame.MAX_ROLLS, 2);
        var invalidRoll = function (pins) {
          frame.roll(2);
        };
        expect(invalidRoll).toThrowError('Invalid number of rolls');
      });
    });

    describe('if roll is greater than the remaining pins', function () {
      it('throws an exception', function () {
        frame.roll(8);
        var invalidRoll = function (pins) {
          frame.roll(4);
        };
        expect(invalidRoll).toThrowError('Invalid roll');
      });
    });
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
