'use strict';

describe('Feature Tests', function(){

  var testName = "Rick"
  var normalThrowScore = 4

  describe('Scenario: Regular Frame', function(){


    it('logs correct score for a frame of regular throws',function(){
      var thrower = new Thrower;
      var frame  = new FrameHandler(thrower);

      spyOn(frame,'_throwBall').and.returnValue(normalThrowScore);
      frame.startFrame();
      frame.startRound();
      expect(frame.result.throw1).toEqual(normalThrowScore);
      frame.startRound();
      expect(frame.result.throw2).toEqual(normalThrowScore);

    })
  });
});
