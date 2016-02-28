'use strict';

describe('Frame', function () {
  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  describe('#constructor', function () {
    it('can initialize a three-roll frame', function () {
      frame = new Frame(true);
      this.rollMany(frame, 2, 1);
      var thirdRoll = function () {
        frame.roll(1);
      };
      expect(thirdRoll).not.toThrowError('Invalid number of rolls');
    });
  });

  describe('#roll', function () {
    it('logs a roll for the frame', function () {
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
    it('returns the outcome of a given roll', function () {
      frame.roll(5);
      frame.roll(4);
      expect(frame.getRoll(2)).toEqual(4);
    });
  });

  describe('#isComplete', function () {
    describe('if the player has NOT rolled twice', function () {
      it('returns false', function () {
        frame.roll(5);
        expect(frame.isComplete()).toBeFalsy();
      });
    });

    describe('if the player has rolled twice', function () {
      it('returns true', function () {
        frame.roll(1);
        frame.roll(1);
        expect(frame.isComplete()).toBeTruthy();
      });
    });

    describe('if the player has rolled a strike', function () {
      it('returns true', function () {
        frame.roll(10);
        expect(frame.isComplete()).toBeTruthy();
      });
    });
  });

  describe('#isAStrike', function () {
    describe('if the player has rolled a strike', function () {
      it('returns true', function () {
        frame.roll(10);
        expect(frame.isAStrike()).toBeTruthy();
      });
    });

    describe('if the player has NOT rolled a strike', function () {
      it('returns false', function () {
        frame.roll(5);
        expect(frame.isAStrike()).toBeFalsy();
      });
    });
  });

  describe('#isASpare', function () {
    describe('if the player has rolled a spare', function () {
      it('returns true', function () {
        this.rollMany(frame, 2, 5);
        expect(frame.isASpare()).toBeTruthy();
      });
    });

    describe('if the player has NOT rolled a spare', function () {
      it('returns false', function () {
        this.rollMany(frame, 2, 2);
        expect(frame.isASpare()).toBeFalsy();
      });
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
