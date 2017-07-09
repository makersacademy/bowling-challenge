'use strict';

describe('Frame', function () {
  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  describe('processRoll', function () {
    it('calls checkFullFrame', function () {
      spyOn(frame, 'checkFullFrame');
      frame.processRoll();
      expect(frame.checkFullFrame).toHaveBeenCalled();
    });
    it('calls updateFrameScore and passes roll() if rollcount is less than 2 and remainder greater than 0', function () {
      spyOn(frame, 'getRollCount').and.returnValue(1);
      spyOn(frame, 'remainder').and.returnValue(10);
      spyOn(Math, 'random').and.returnValue(0.51);
      spyOn(frame, 'updateFrameScore');
      frame.processRoll();
      expect(frame.updateFrameScore).toHaveBeenCalledWith(5);
    });
    it('calls updateFrameScore and passes 0 if rollcount is less than 2 but remainder is 0', function () {
      spyOn(frame, 'getRollCount').and.returnValue(1);
      spyOn(frame, 'remainder').and.returnValue(0);
      spyOn(frame, 'updateFrameScore');
      frame.processRoll();
      expect(frame.updateFrameScore).toHaveBeenCalledWith(0);
    });
    it('does not call updateFrameScore if rollcount is >= 2', function () {
      spyOn(frame, 'getRollCount');
      frame.getRollCount.and.returnValue(2);
      spyOn(frame, 'remainder');
      frame.remainder.and.returnValue(5);
      spyOn(frame, 'updateFrameScore');
      frame.processRoll();
      expect(frame.updateFrameScore).not.toHaveBeenCalled();
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
      spyOn(frame, 'getFrameScore').and.returnValue([2, 4]);
      expect(function () { frame.updateFrameScore(4); }).toThrowError();
    });
    it('throws error if passed a score that is not integer', function () {
      spyOn(frame, 'getFrameScore').and.returnValue([2]);
      expect(function () { frame.updateFrameScore(11); }).toThrowError(TypeError);
    });
    it('throws error if not passed a parameter', function () {
      spyOn(frame, 'getFrameScore').and.returnValue([2]);
      expect(function () { frame.updateFrameScore(); }).toThrowError(TypeError);
    });
    it('calls updateRollCount at the end', function () {
      spyOn(frame, 'updateRollCount');
      frame.updateFrameScore(2);
      expect(frame.updateRollCount).toHaveBeenCalled();
    });
    it('pushes new score to frameScore', function () {
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

  describe('checkFullFrame', function () {
    it('calls updateIsFinished if rollCount is > 1', function () {
      spyOn(frame, 'getRollCount').and.returnValue(2);
      spyOn(frame, 'updateIsFinished');
      frame.checkFullFrame();
      expect(frame.updateIsFinished).toHaveBeenCalledWith(true);
    });
    it('does not call updateIsFinished if rollCount is < 2', function () {
      spyOn(frame, 'getRollCount').and.returnValue(1);
      spyOn(frame, 'updateIsFinished');
      frame.checkFullFrame();
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
      spyOn(frame, 'getFrameScore').and.returnValue([5]);
      spyOn(card, 'updateCard');
      frame.updateScoreCard();
      expect(frame.getScoreCard).toHaveBeenCalled();
      expect(card.updateCard).toHaveBeenCalledWith([5]);
    });
  });

  describe('getFrameScore', function () {
    it('returns frameScore property', function () {
      frame.frameScore = [5, 3];
      expect(frame.getFrameScore()).toEqual([5, 3]);
    });
  });
});
