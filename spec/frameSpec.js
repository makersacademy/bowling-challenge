'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('#playedRolls', function() {
    it('has an initial value of 0', function() {
      expect(frame.playedRolls).toEqual(0);
    });

    it('cannot be more than 2', function() {
      var noMoreRolls = 'Only 2 rolls per frame: no cheating, please!';
      frame.addPlayedRoll();
      frame.addPlayedRoll();
      expect(function() { frame.roll(1) }).toThrowError(noMoreRolls);
    });
  });

  describe('#standingPins', function() {
    it('has an initial value of 10', function() {
      expect(frame.standingPins).toEqual(10);
    });
  });

  describe('#rollKnockedPins', function() {
    it('has an initial value of 0', function() {
      expect(frame.rollKnockedPins).toEqual(0);
    });
  });

  describe('#frameKnockedPins', function() {
    it('has an initial value of 0', function() {
      expect(frame.frameKnockedPins).toEqual(0);
    });
  });

  describe('#frameScore', function() {
    it('has an initial value of 0', function() {
      expect(frame.frameScore).toEqual(0);
    });
  });

  describe('#getPlayedRolls', function() {
    it('returns the number of played rolls', function() {
      expect(frame.getPlayedRolls()).toEqual(frame.playedRolls);
    });
  });

  describe('#getStandingPins', function() {
    it('returns the number of standing pins', function() {
      expect(frame.getStandingPins()).toEqual(frame.standingPins);
    });
  });

  describe('#getRollKnockedPins', function() {
    it('returns the number of knocked pins in this roll', function() {
      expect(frame.getRollKnockedPins()).toEqual(frame.rollKnockedPins);
    });
  });

  describe('#getFrameKnockedPins', function() {
    it('returns the total number of knocked pins in this frame', function() {
      expect(frame.getFrameKnockedPins()).toEqual(frame.frameKnockedPins);
    });
  });

  describe('#getFrameScore', function() {
    it('returns the current frame score', function() {
      expect(frame.getFrameScore()).toEqual(frame.frameScore);
    });
  });

  describe('#isValidNumber', function() {
    describe('returns true when passed:', function() {
      it('integers between 0 and the number of standing pins', function() {
        expect(frame.isValidNumber(3)).toEqual(true);
      });
    });

    describe('return false when passed:', function() {
      it('negative integers', function() {
        expect(frame.isValidNumber(-1)).toEqual(false);
      });
      it('integers greater than the number of standing pins', function() {
        expect(frame.isValidNumber(11)).toEqual(false);
      });
      it('floats', function() {
        expect(frame.isValidNumber(3.2)).toEqual(false);
      });
      it('strings', function() {
        expect(frame.isValidNumber('one')).toEqual(false);
      });
    });
  });

  describe('#addPlayedRoll', function() {
    it('updates the number of played rolls by one', function() {
      frame.addPlayedRoll();
      frame.addPlayedRoll();
      expect(frame.playedRolls).toEqual(2);
    });
  });

  describe('#updateStandingPins', function() {
    it('updates the number of standing pins', function() {
      frame.setRollKnockedPins(4);
      frame.updateStandingPins();
      frame.setRollKnockedPins(5);
      frame.updateStandingPins();
      expect(frame.standingPins).toEqual(1);
    });
  });

  describe('#setRollKnockedPins', function() {
    it('sets the number of knocked pins in this roll', function() {
      frame.setRollKnockedPins(4);
      expect(frame.rollKnockedPins).toEqual(4);
    });
  });

  describe('#updateFrameKnockedPins', function() {
    it('updates the total number of knocked pins in this frame', function() {
      frame.setRollKnockedPins(4);
      frame.updateFrameKnockedPins();
      frame.setRollKnockedPins(2);
      frame.updateFrameKnockedPins();
      expect(frame.frameKnockedPins).toEqual(6);
    });
  });

  describe('#setFrameScore', function() {
    it('sets the current frame score', function() {
      frame.setFrameScore(3);
      frame.setFrameScore(4);
      expect(frame.frameScore).toEqual(7);
    });
  });

  describe('#roll', function() {
    describe('throws an error when passed:', function() {
      var invalidValue = 'Only valid numbers: no cheating, please!';

      it('negative integers', function() {
        expect(function() { frame.roll(-1) }).toThrowError(invalidValue);
      });

      it('integers greater than the number of standing pins', function() {
        expect(function() { frame.roll(11) }).toThrowError(invalidValue);
      });

      it('floats', function() {
        expect(function() { frame.roll(3.2) }).toThrowError(invalidValue);
      });

      it('strings', function() {
        expect(function() { frame.roll('one') }).toThrowError(invalidValue);
      });
    });

    it('sets the number of knocked pins in this roll', function() {
      frame.roll(4);
      expect(frame.rollKnockedPins).toEqual(4);
    });

    it('updates the total number of knocked pins in this frame', function() {
      frame.roll(4);
      frame.roll(2);
      expect(frame.frameKnockedPins).toEqual(6);
    });

    it('updates the number of standing pins', function() {
      frame.roll(5);
      frame.roll(2);
      expect(frame.standingPins).toEqual(3);
    });

    it('sets the current frame score', function() {
      frame.roll(2);
      frame.roll(3);
      expect(frame.frameScore).toEqual(5);
    });
  });
});
