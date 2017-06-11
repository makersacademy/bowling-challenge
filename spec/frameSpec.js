"use strict";

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('score', function(){
    it('starts with a score of zero', function(){
      expect(frame.score).toEqual(0);
    });

    it('adds the first ball score to the frame total', function(){
      frame.score = null
      frame.bowl();
      expect(frame.score).not.toEqual(null)
      expect(frame.score).toBeLessThan(11);
    });

    it('adds the second ball score to the frame total', function(){
      frame.firstBallScore = 4;
      frame.score = frame.firstBallScore;
      frame.isFirstBall = false;
      spyOn(frame, "knockDownPins").and.returnValue(2);
      frame.bowl();
      expect(frame.score).toEqual(6);
    });
  });

  describe('bowling', function(){
    it("splits one frame into two balls", function(){
      expect(frame.isFirstBall).toEqual(true);
      frame.bowl();
      expect(frame.isFirstBall).toEqual(false);
      frame.bowl();
      expect(frame.isFirstBall).toEqual(true);
    });
  });

});
