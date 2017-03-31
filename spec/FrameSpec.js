'use strict';

describe('Frame', function () {

  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  describe('#randomRollOneFrame', function () {
    it('returns frame generated randomly', function () {
      spyOn(Math,'random').and.returnValue(0.4);
      frame.randomRollOneFrame();
      expect(frame.getFrame()).toEqual([4,4]);
    });
    it('sum of frame rolls can not be more than 10', function () {
      spyOn(Math,'random').and.returnValue(0.6);
      frame.randomRollOneFrame();
      expect(frame.getFrame()).toEqual([6,4]);
    });
  });

  describe('#rollOneFrame', function () {
    it('returns frame is recieves', function () {
      frame.rollOneFrame(4,3);
      expect(frame.getFrame()).toEqual([4,3]);
    });
  });

  describe('#isStrike', function () {
    it('returns true if frame is strike', function () {
      frame.rollOneFrame(10,0);
      expect(frame.isStrike()).toEqual(true);
    });
    it('returns false if frame is not strike', function () {
      frame.rollOneFrame(9,1);
      expect(frame.isStrike()).toEqual(false);
    });
  });

  describe('#isSpare', function () {
    it('returns true if frame is strike', function () {
      frame.rollOneFrame(10,0);
      expect(frame.isSpare()).toEqual(true);
    });
    it('returns true if frame is spare', function () {
      frame.rollOneFrame(8,2);
      expect(frame.isSpare()).toEqual(true);
    });
    it('returns false if frame is not spare at all', function () {
      frame.rollOneFrame(4,5);
      expect(frame.isSpare()).toEqual(false);
    });
  });

  describe('#finalFrame', function () {
    it('returns [0,0] if final roll is neither strike nor spare', function () {
      frame.rollOneFrame(2,3);
      expect(frame.finalFrame()).toEqual([0,0]);
    });
    it('returns [x,0] if final roll is spare', function () {
      frame.rollOneFrame(8,2);
      expect(frame.finalFrame(3)).toEqual([3,0]);
    });
    it('returns [x,y] if final roll is strike', function () {
      frame.rollOneFrame(10,0);
      expect(frame.finalFrame(2,3)).toEqual([2,3]);
    });
  });

});
