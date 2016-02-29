'use strict';

describe('LastFrame', function () {
  var frame;

  beforeEach(function () {
    frame = new LastFrame();
  });

  describe('#roll', function () {
    it('logs a roll for the frame', function () {
      this.rollMany.call(frame, 1, 5);
      expect(frame.getRoll(1)).toEqual(5);
    });

    describe('if player has NOT rolled a strike or a spare', function () {
      describe('if player already rolled twice', function () {
        it('throws an exception', function () {
          this.rollMany.call(frame, 2, 3);
          var thirdRoll = function () {
            frame.roll(2);
          };
          expect(thirdRoll).toThrowError('Invalid number of rolls');
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

    describe('if the player has rolled a strike or a spare', function () {
      describe('if player already rolled three times', function () {
        it('throws an exception', function () {
          this.rollMany.call(frame, 3, 5);
          var thirdRoll = function () {
            frame.roll(2);
          };
          expect(thirdRoll).toThrowError('Invalid number of rolls');
        });
      });

      it('resets the pins for bonus rolls', function () {
        this.rollMany.call(frame, 2, 10);
        var thirdStrike = function () {
          frame.roll(10);
        };
        expect(thirdStrike).not.toThrowError('Invalid roll');
      });
    });
  });

  describe('#getRoll', function () {
    it('returns the outcome of a given roll', function () {
      this.rollMany.call(frame, 2, 5);
      frame.roll(1);
      expect(frame.getRoll(3)).toEqual(1);
    });
  });

  describe('#isComplete', function () {
    describe('if player has NOT rolled a strike or a spare', function () {
      describe('and has NOT rolled twice', function () {
        it('returns false', function () {
          this.rollMany.call(frame, 1, 2);
          expect(frame.isComplete()).toBeFalsy();
        });
      });

      describe('and has rolled twice', function () {
        it('returns true', function () {
          this.rollMany.call(frame, 2, 2);
          expect(frame.isComplete()).toBeTruthy();
        });
      });
    });

    describe('if the player has rolled a strike or a spare', function () {
      describe('and has NOT rolled three times', function () {
        it('returns false', function () {
          this.rollMany.call(frame, 2, 10);
          expect(frame.isComplete()).toBeFalsy();
        });
      });

      describe('and has rolled three times', function () {
        it('returns true', function () {
          this.rollMany.call(frame, 3, 5);
          expect(frame.isComplete()).toBeTruthy();
        });
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
        this.rollMany.call(frame, 2, 5);
        expect(frame.isASpare()).toBeTruthy();
      });
    });

    describe('if the player has NOT rolled a spare', function () {
      it('returns false', function () {
        this.rollMany.call(frame, 2, 2);
        expect(frame.isASpare()).toBeFalsy();
      });
    });

    describe('if the player has rolled a strike', function () {
      it('returns false', function () {
        frame.roll(10);
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
