'use strict';

describe('FrameHandler', function(){
  var frame;
  var normalThrowScore = 7;
  var strikeThrowScore = 10;
  var thrower = {
    pinsLeft: 10,
    throw: function(){},
    resetPins: function(){},
    throw: function(){}
  }
  var frameTerminator = {
    isFrameOver: function(frameState){}
  }

  beforeEach(function(){
    frame = new FrameHandler(thrower,frameTerminator);
  });

  describe('currentFrameState', function(){

    it('correctly parses the current framestate for use in frameTerminator',function(){
      var expectedFrameState = {
        framesFinished: 0,
        throwsMade: 0,
        throw1: 0,
        throw2: 0,
        throw3: 0
      }
      expect(frame.currentFrameState()).toEqual(expectedFrameState);
    });
  });

  describe('Initialize', function(){

    it('receives a thrower class',function(){
      expect(frame.thrower).toBeDefined();
    });
    it('receives a frameTerminator class',function(){
      expect(frame.frameTerminator).toBeDefined();
    });

  });
  describe('#startFrame', function(){
    it('calls reset on the ball throw pins',function(){
      spyOn(frame.thrower, 'resetPins');
      frame.startFrame();
      expect(frame.thrower.resetPins).toHaveBeenCalled();
    });

    it('resets the score1',function(){
      frame.result.throw1 = normalThrowScore;
      frame.startFrame();
      expect(frame.result.throw1).toEqual(0);

    });
    it('resets the score2',function(){
      frame.result.throw2 = normalThrowScore;
      frame.startFrame();
      expect(frame.result.throw2).toEqual(0);
    });
    it('returns the throw number to 0', function(){
      frame.throwsMade=2
      frame.startFrame()
      expect(frame.throwsMade).toEqual(0);
    })
    it('returns the frame to an incomplete state',function(){
      frame.isComplete = true;
      frame.startFrame();
      expect(frame.isComplete).toEqual(false);

    });
  });

  describe('#startRound',function(){
    it('does not throw if it does not pass checks ', function(){
      frame.isComplete = true;
      expect(frame.isComplete).toEqual(true);
      expect(function(){frame.startRound();}).toThrowError("Frame is over, can't throw");

    });
    it('makes a call to the thrower class for a score',function(){
      spyOn(frame.thrower, 'throw');
      frame.startRound();
      expect(frame.thrower.throw).toHaveBeenCalled();
    });
    it('updates turn number after ball is thrown',function(){
      frame.startRound();
      expect(frame.throwsMade).toEqual(1);
    });
    it('updates scores correctly on round 1',function(){
      spyOn(frame.thrower, 'throw').and.returnValue(normalThrowScore)
      frame.startRound();
      expect(frame.result.throw1).toEqual(normalThrowScore)
    });

    it('ends the round where appropriate using Frame Terminator',function(){
      spyOn(frame.frameTerminator, 'isFrameOver')
      frame.startRound();
      expect(frame.frameTerminator.isFrameOver).toHaveBeenCalled();
    })


    it('increments the frame number when a frame is over',function(){
      spyOn(frame.thrower, 'throw').and.returnValue(normalThrowScore);
      frame.startRound();
      spyOn(frame.frameTerminator, 'isFrameOver').and.returnValue(true);
      frame.startRound();
      expect(frame.frameNumber).toEqual(1)
    });




    //
    // it('rolls a ball when frameTerminator outputs false',function(){
    //
    // });
    // it('does not roll a ball when frameTerminator outputs true', function(){
    //
    // });


  });

  describe('#playFrame',function(){
    beforeEach(function(){
      spyOn(frame.thrower, 'resetPins')

      spyOn(frame.thrower, 'throw')
    });

    it('calls throw on a BallThrow class', function(){
      frame.throw();
      expect(frame.thrower.throw).toHaveBeenCalled();
    });
    it('calls update score',function(){
      spyOn(frame, 'updateScore')
      frame.throw();
      expect(frame.updateScore).toHaveBeenCalled();
    });
  });



  describe('#updateScore', function(){
    it('updates the score for throw 1',function(){
      frame.updateScore(normalThrowScore);
      expect(frame.result.throw1).toEqual(normalThrowScore);
    });
    it('updates the score for throw 2', function(){
      frame.throwsMade=1;
      frame.updateScore(8);
      expect(frame.result.throw2).toEqual(8);
    });
  });




});
