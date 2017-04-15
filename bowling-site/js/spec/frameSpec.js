'use strict';

describe('Frame', function(){
  var frame;
  var normalThrowScore = 7

  beforeEach(function(){
    frame = new Frame();
  });

  describe('Initialize', function(){
    it('starts the frame as unfinished',function(){
      expect(frame.isFinished).toEqual(false);
    })
    it('frame starts on throw 1',function(){
      expect(frame.throwNumber).toEqual(1);
    });
    it('frame starts with 10 pins', function(){
      expect(frame.pins).toEqual(10);
    })
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
      expect(frame.scoreThrow1).toEqual(normalThrowScore);
    });
    it('updates the score for throw 2', function(){
      frame.throwNumber=2;
      frame.updateScore(8);
      expect(frame.scoreThrow2).toEqual(8);
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
});
