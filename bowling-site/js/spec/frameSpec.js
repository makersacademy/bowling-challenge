'use strict';

describe('Frame', function(){
  var frame;
  var normalThrowScore = 7
  var ballThrower = {
    pinsLeft: 10,
    throwBall: function(){},
    resetPins: function(){}
  }

  beforeEach(function(){
    frame = new Frame(ballThrower);
  });

  describe('Initialize', function(){
    it('starts the frame as unfinished',function(){
      expect(frame.isFinished).toEqual(false);
    })
    it('frame starts on throw 1',function(){
      expect(frame.throwNumber).toEqual(1);
    });

  });



  describe('#playFrame',function(){
    beforeEach(function(){
      // spyOn(frame,"pins").and.returnValue(default)
      spyOn(frame.ballThrower, 'throwBall')
      spyOn(frame.ballThrower, 'resetPins')

    });
    it('calls updatePins on a BallThrow class', function(){
      frame.throwBall();
      expect(frame.ballThrower.resetPins).toHaveBeenCalled();
    });
    it('calls throwBall on a BallThrow class', function(){
      frame.throwBall();
      expect(frame.ballThrower.throwBall).toHaveBeenCalled();
    });
    it('calls update score',function(){
      spyOn(frame, 'updateScore')
      frame.throwBall();
      expect(frame.updateScore).toHaveBeenCalled();
    });
  });

  describe('#isReadyForTurn2', function(){
    it('ends the frame if a strike is rolled on turn 1', function(){
      frame.updateScore(10);
      expect(frame.isReadyForTurn2()).toEqual(false);
    });
  });

  describe('#updateScore', function(){
    it('updates the score for throw 1',function(){
      frame.updateScore(normalThrowScore);
      expect(frame.result.throw1).toEqual(normalThrowScore);
    });
    it('updates the score for throw 2', function(){
      frame.throwNumber=2;
      frame.updateScore(8);
      expect(frame.result.throw2).toEqual(8);
    });
  });

  describe('#endThrow', function(){
    it('ends the turn', function(){
      frame.endThrow();
      expect(frame.throwNumber).toEqual(2);
    });
  });

  describe('#endFrame', function(){
    it('ends the frame',function(){
      frame.endFrame();
      expect(frame.isFinished).toEqual(true);
    });
  });

  describe('#start', function(){
    it('calls reset on the ball throw pins',function(){
      spyOn(frame.ballThrower, 'resetPins');
      frame.start();
      expect(frame.ballThrower.resetPins).toHaveBeenCalled();
    });

    it('resets the score1',function(){
      frame.result.throw1 = normalThrowScore;
      frame.start();
      expect(frame.result.throw1).toEqual(0);

    });
    it('resets the score2',function(){
      frame.result.throw2 = normalThrowScore;
      frame.start();
      expect(frame.result.throw2).toEqual(0);
    });
  });
});
