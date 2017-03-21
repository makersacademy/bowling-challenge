'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(1);
  });

  describe('~constructor', function() {

    it('starts with a frame number', function(){
      expect(frame.frameNumber).toEqual(1);
    })

    it('starts with an empty ball array', function(){
        expect(frame.balls).toEqual([]);
    });

    it('is not complete', function(){
        expect(frame.complete).not.toBe(true);
    });

  });

  describe('.addBall', function(){

    it('can add a ball and not be complete on first ball', function() {
      frame.addBall(5);
      expect(frame.balls).toEqual([5]);
      expect(frame.isComplete()).toEqual(false);
    });

    it('can add two balls and be complete on second ball', function() {
      frame.addBall(5);
      frame.addBall(1);
      expect(frame.balls).toEqual([5,1]);
      expect(frame.isComplete()).toEqual(true);
    });

    it('can add a ball and be complete on first ball strike', function() {
      frame.addBall(10);
      expect(frame.balls).toEqual([10]);
      expect(frame.isComplete()).toEqual(true);
    });

  });

  describe('.completeFrame', function(){

    it('completes frame', function(){
      expect(frame.complete).toBe(false);
      frame._completeFrame();
      expect(frame.complete).toBe(true);
    });

  });

  describe('.getFrameScore', function(){
    describe('frames 1 to 9', function(){
      it('returns the correct score of the frame when not a spare or strike', function(){
        frame.addBall(5);
        frame.addBall(1);
        expect(frame.getFrameScore()).toEqual(6);
      });

      it('returns the score of the frame with bonuses when a strike', function(){
        frame.addBall(10);
        expect(frame.getFrameScore(1,2)).toEqual(13);
      });

      it('returns the correct score for the frame when not a spare or strike but is passed bonus balls', function(){
        frame.addBall(5);
        frame.addBall(1);
        expect(frame.getFrameScore(1,2)).toEqual(6);
      });

      it('returns the correct score for the frame when a spare', function(){
        frame.addBall(5);
        frame.addBall(5);
        expect(frame.getFrameScore(1,2)).toEqual(10);
      });

      it('throws an error when trying to add a third ball', function(){
        frame.addBall(5);
        frame.addBall(5);
        expect(function(){frame.addBall(5)}).toThrow('Cannot add ball to a frame that is already complete');
        expect(frame.getFrameScore()).toEqual(10);
      });

    });

    describe('frame 10', function(){

      beforeEach(function() {
        frame = new Frame(10);
      });

      it('returns the correct score of the frame when not a spare or strike', function(){
        frame.addBall(5);
        frame.addBall(1);
        expect(frame.getFrameScore()).toEqual(6);
      });

      it('returns the score of the frame with bonuses when a strike', function(){
        frame.addBall(10);
        frame.addBall(10);
        frame.addBall(10);
        expect(frame.getFrameScore()).toEqual(30);
      });

      it('returns the correct score for the frame when a spare', function(){
        frame.addBall(5);
        frame.addBall(5);
        frame.addBall(5);
        expect(frame.getFrameScore()).toEqual(15);
      });

      it('throws an error when trying to add a third ball where the first two balls add up to less than 10', function(){
        frame.addBall(5);
        frame.addBall(4);
        expect(function(){frame.addBall(5)}).toThrow('Cannot add ball to a frame that is already complete');
        expect(frame.getFrameScore()).toEqual(9);
      });
    });
  });

});
