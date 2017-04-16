'use strict';

describe('Feature Tests', function(){

  var testName = "Rick"
  var normalThrowScore = 4

  describe('Scenario: Regular Frame', function(){


    beforeEach(function(){
    });
    it('logs correct score for a frame of regular throws',function(){
    });

    it('starts the frame as unfinished',function(){
      var thrower = new Thrower;
      var frame  = new Frame(thrower);

      spyOn(frame,'_throwBall').and.returnValue(normalThrowScore);
      frame.start();
      frame.startRound();
      expect(frame.result.throw1).toEqual(normalThrowScore);
      frame.startRound();
      expect(frame.result.throw2).toEqual(normalThrowScore);

    })
  });
});
