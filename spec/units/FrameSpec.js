'use strict';

describe('Frame', function () {
  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  describe('processRoll', function () {
    beforeEach(function () {
      var frame = new Frame();
    });
    it('calls updateFrameScore and passes roll() if isFullFrame and isStrike are both false', function () {
      spyOn(frame, 'isFullFrame').and.returnValue(false);
      spyOn(frame, 'isStrike').and.returnValue(false);
      spyOn(frame, 'roll').and.returnValue(5);
      spyOn(frame, 'updateFrameScore');
      frame.processRoll();
      expect(frame.updateFrameScore).toHaveBeenCalledWith(5);
    });
    it('calls updateFrameScore and passes 0 if first roll was strike', function () {
      spyOn(frame, 'isFullFrame').and.returnValue(false);
      spyOn(frame, 'isStrike').and.returnValue(true);
      spyOn(frame, 'updateFrameScore');
      frame.processRoll();
      expect(frame.updateFrameScore).toHaveBeenCalledWith(0);
    });
    it('throws error if frame is finished', function () {
      spyOn(frame, 'isFullFrame').and.returnValue(true);
      spyOn(frame, 'isStrike').and.returnValue(false);
      expect(function () { frame.processRoll(); }).toThrow(new Error('ProcessRoll called on full frame'));
    });
  });

  describe('getRollCount', function () {
    it('returns rollCount', function () {
      frame.rollCount = 4;
      expect(frame.getRollCount()).toEqual(4);
    });
  });

  describe('remainder', function () {
    it('defaults to return 10 if no roll has been taken', function () {
      spyOn(frame, 'getRollCount').and.returnValue(0);
      expect(frame.remainder()).toEqual(10);
    });
    it('returns points left after a roll has been taken', function () {
      spyOn(frame, 'getRollCount').and.returnValue(1);
      spyOn(frame, 'getFrameScore').and.returnValue([4]);
      expect(frame.remainder()).toEqual(6);
    });
  });

  describe('updateFrameScore', function () {
    it('throws error if trying to update frame that already has two scores', function () {
      spyOn(frame, 'isFullFrame').and.returnValue(true);
      expect(function () { frame.updateFrameScore(4); }).toThrowError();
    });
    it('throws error if passed a score that is not integer', function () {
      expect(function () { frame.updateFrameScore(11); }).toThrowError(TypeError);
    });
    it('throws error if not passed a parameter', function () {
      expect(function () { frame.updateFrameScore(); }).toThrowError(TypeError);
    });
    it('calls updateRollCount at the end', function () {
      spyOn(frame, 'updateRollCount');
      spyOn(frame, 'updateScoreCard');
      frame.updateFrameScore(2);
      expect(frame.updateRollCount).toHaveBeenCalled();
    });
    it('pushes new score to frameScore', function () {
      spyOn(frame, 'updateScoreCard');
      frame.updateFrameScore(2);
      expect(frame.getFrameScore()).toEqual([2]);
    });
  });

  describe('roll', function () {
    it('returns random number calculated from remainder', function () {
      spyOn(frame, 'remainder').and.returnValue(10);
      spyOn(Math, 'random').and.returnValue(0.51);
      expect(frame.roll()).toEqual(5);
    });
  });

  describe('updateRollCount', function () {
    it('increments rollCount once', function () {
      frame.rollCount = 1;
      frame.updateRollCount();
      expect(frame.rollCount).toEqual(2);
    });
  });

  describe('isFullFrame', function () {
    it('returns false if rollCount is < 2', function () {
      spyOn(frame, 'getRollCount').and.returnValue(1);
      expect(frame.isFullFrame()).toEqual(false);
    });
    it('returns true if rollCount is > 1', function () {
      spyOn(frame, 'getRollCount').and.returnValue(2);
      expect(frame.isFullFrame()).toEqual(true);
    });
    it('calls updateIsFinished with true if rollCount is > 1', function () {
      spyOn(frame, 'getRollCount').and.returnValue(2);
      spyOn(frame, 'updateIsFinished');
      frame.isFullFrame();
      expect(frame.updateIsFinished).toHaveBeenCalledWith(true);
    });
    it('does not call updateIsFinished if rollCount is < 2', function () {
      spyOn(frame, 'getRollCount').and.returnValue(1);
      spyOn(frame, 'updateIsFinished');
      frame.isFullFrame();
      expect(frame.updateIsFinished).not.toHaveBeenCalled();
    });
  });

  describe('getIsFinished', function () {
    it('returns false on initialisation', function () {
      expect(frame.getIsFinished()).toBe(false);
    });
  });

  describe('updateIsFinished', function () {
    it('assigns argument to isFinished', function () {
      frame.isFinished = false;
      frame.updateIsFinished(true);
      expect(frame.isFinished).toBe(true);
    });
  });

  describe('getScoreCard', function () {
    it('returns scoreCard property', function () {
      frame.scoreCard = 'card';
      expect(frame.getScoreCard()).toEqual('card');
    });
  });

  describe('updateScoreCard', function () {
    it('pushes latest frameScore to scoreCard', function () {
      var card = { updateCard: function (score) {} };
      spyOn(frame, 'getScoreCard').and.returnValue(card);
      spyOn(frame, 'getLastRoll').and.returnValue(5);
      spyOn(card, 'updateCard');
      frame.updateScoreCard();
      expect(frame.getScoreCard).toHaveBeenCalled();
      expect(frame.getLastRoll).toHaveBeenCalled();
      expect(card.updateCard).toHaveBeenCalledWith(5);
    });
    it('calls getLastRoll', function () {
      var card = { updateCard: function (score) {} };
      spyOn(frame, 'getScoreCard').and.returnValue(card);
      spyOn(frame, 'getLastRoll').and.returnValue(5);
      spyOn(card, 'updateCard');
      frame.updateScoreCard();
      expect(frame.getLastRoll).toHaveBeenCalled();
    });
    it('calls getScoreCard', function () {
      var card = { updateCard: function (score) {} };
      spyOn(frame, 'getScoreCard').and.returnValue(card);
      spyOn(frame, 'getLastRoll').and.returnValue(5);
      spyOn(card, 'updateCard');
      frame.updateScoreCard();
      expect(frame.getScoreCard).toHaveBeenCalled();
    });
  });

  describe('getFrameScore', function () {
    it('returns frameScore property', function () {
      frame.frameScore = [5, 3];
      expect(frame.getFrameScore()).toEqual([5, 3]);
    });
  });

  describe('getLastRoll', function () {
    it('returns int of last element in frame', function () {
      spyOn(frame, 'getFrameScore').and.returnValue([2, 3]);
      expect(frame.getLastRoll()).toEqual(3);
    });
    it('returns int of last element in frame when only one', function () {
      spyOn(frame, 'getFrameScore').and.returnValue([2]);
      expect(frame.getLastRoll()).toEqual(2);
    });
  });
});
