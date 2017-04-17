'use strict';

describe('Feature Tests', function(){

  var testName = "Rick"
  var normalThrowScore = 4

  describe('Scenario: Regular Frame', function(){


    it('logs correct score for a frame of regular throws',function(){
      var thrower = new Thrower();
      var frameTerminator = new FrameTerminator();
      var frame  = new FrameHandler(thrower, frameTerminator);

      spyOn(frame,'_throwBall').and.returnValue(normalThrowScore);
      frame.startFrame();
      frame.startRound();
      expect(frame.result.throw1).toEqual(normalThrowScore);
      frame.startRound();
      expect(frame.result.throw2).toEqual(normalThrowScore);

    })
  });

  describe('Scenario: User plays a game of normal throws ',function(){
    var thrower = new Thrower;
    var frameHandler = new FrameHandler(thrower);
    var game = new Game(frameHandler);
  });
});
