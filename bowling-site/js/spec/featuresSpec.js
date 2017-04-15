'use strict';

describe('Feature Tests', function(){


  describe('Scenario: Regular Frame', function(){


    beforeEach(function(){
      var testName = "Rick"
      var normalThrowScore = 4
    });
    it('logs correct score for a frame of regular throws',function(){
    });

    it('starts the frame as unfinished',function(){
      var ballThrow = new BallThrow;
      var frame  = new Frame(ballThrow);

      spyOn(ballThrow,'throwBall').and.returnValue(3);
      debugger;
      frame.throwBall();
      frame.throwBall();
      frame.endFrame();
      debugger;
      expect(frame.result().score1).toEqual(3);
      expect(frame.result().score2).toEqual(3);

    })
  });
});
