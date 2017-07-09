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
      spyOn(frame, 'getRollCount');
      frame.getRollCount.and.returnValue(1);
      spyOn(frame, 'remainder');
      frame.remainder.and.returnValue(10);
      spyOn(Math, 'random').and.returnValue(0.51);
      spyOn(frame, 'updateFrameScore');
      frame.processRoll();
      expect(frame.updateFrameScore).toHaveBeenCalledWith(5);
    });
    it('calls updateFrameScore and passes 0 if rollcount is less than 2 but remainder is 0', function () {
      spyOn(frame, 'getRollCount');
      frame.getRollCount.and.returnValue(1);
      spyOn(frame, 'remainder');
      frame.remainder.and.returnValue(0);
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
      spyOn(frame, 'getRollCount');
      frame.getRollCount.and.returnValue(0);
      expect(frame.remainder()).toEqual(10);
    });
    it('returns points left after a roll has been taken', function () {
      spyOn(frame, 'getRollCount');
      frame.getRollCount.and.returnValue(1);
      spyOn(frame, 'getFrameScore');
      frame.getFrameScore.and.returnValue([4]);
      expect(frame.remainder()).toEqual(6);
    });
  });
});
