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

  beforeEach(function(){
    frame = new FrameHandler(thrower);
  });

  describe('Initialize', function(){

    it('receives a thrower class',function(){
      expect(frame.thrower).toBeDefined();
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
      frame.throwNumber=2
      frame.startFrame()
      expect(frame.throwNumber).toEqual(0);
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
      expect(frame.throwNumber).toEqual(1);
    });
    it('updates scores correctly on round 1',function(){
      spyOn(frame.thrower, 'throw').and.returnValue(normalThrowScore)
      frame.startRound();
      expect(frame.result.throw1).toEqual(normalThrowScore)
    });
    it('ends the round when there is a strike',function(){
      spyOn(frame.thrower, 'throw').and.returnValue(strikeThrowScore)
      frame.startRound();
      expect(frame.isComplete).toEqual(true);
    });
    it('ends the round when the throw limit is exceeded',function(){
      spyOn(frame.thrower, 'throw').and.returnValue(normalThrowScore)
      frame.startRound();
      frame.startRound();
      expect(frame.isComplete).toEqual(true);
    });
    it('increments the frame number when a frame is over',function(){
      spyOn(frame.thrower, 'throw').and.returnValue(normalThrowScore)
      frame.startRound();
      frame.startRound();
      expect(frame.frameNumber).toEqual(1)
    });

    describe('Context: 10th Frame', function(){
      beforeEach(function(){
        frame.frameNumber = 9;
      });
      it('does not roll a third ball normally', function(){

      });
      it('rolls a third ball after spare',function(){
        spyOn(frame.thrower, 'throw').and.returnValue(5);
        frame.startRound()
        frame.startRound()
        frame.startRound()
        expect(frame.result.throw3).toEqual(5);
      });
      it('allows for 3 strikes',function(){

        spyOn(frame.thrower, 'throw').and.returnValue(10);
        frame.startRound()
        frame.startRound()
        frame.startRound()
        expect(frame.result.throw3).toEqual(10);
      });
    });
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
      frame.throwNumber=1;
      frame.updateScore(8);
      expect(frame.result.throw2).toEqual(8);
    });
  });




});
