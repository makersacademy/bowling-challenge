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

    it('is not complete', function(){
        expect(frame.complete).not.toBe(true);
    });

  });

  describe('._getPins', function(){
    describe('frames 1 to 9', function(){

      it('starts with 10 pins', function(){
        expect(frame._getPins()).toEqual(10);
      });

      it('is 0 after a strike', function(){
        frame.addBall(10);
        expect(frame._getPins()).toEqual(0);
      });

      it('is 0 after a spare', function(){
        frame.addBall(5);
        frame.addBall(5);
        expect(frame._getPins()).toEqual(0);
      });

      it('is 5 after a first ball of 5', function(){
        frame.addBall(5);
        expect(frame._getPins()).toEqual(5);
      });

    });

    describe('.getBalls', function(){
        it('returns the frames balls when one ball', function(){
          frame.addBall(10);
          expect(frame.getBalls()).toEqual([10]);
        });

        it('returns the frames balls when two balls', function(){
          frame.addBall(5);
          frame.addBall(5);
          expect(frame.getBalls()).toEqual([5,5]);
        });

        it('returns the frames balls when three balls', function(){
          frame = new Frame(10);
          frame.addBall(5);
          frame.addBall(5);
          frame.addBall(5);
          expect(frame.getBalls()).toEqual([5,5,5]);
        });
    });

    describe('.getFrameNumber', function(){
        it('returns the frames number', function(){
          expect(frame.getFrameNumber()).toEqual(1);
        });
    });

    describe('frames 10', function(){

      beforeEach(function() {
        frame = new Frame(10);
      });

      it('starts with 30 pins', function(){
        expect(frame._getPins()).toEqual(10);
      });

      it('is 10 after a strike', function(){
        frame.addBall(10);
        expect(frame._getPins()).toEqual(10);
      });

      it('is 10 after two strikes', function(){
        frame.addBall(10);
        frame.addBall(10);
        expect(frame._getPins()).toEqual(10);
      });

      it('is 0 after three strikes', function(){
        frame.addBall(10);
        frame.addBall(10);
        frame.addBall(10);
        expect(frame._getPins()).toEqual(0);
      });

      it('is 10 after a spare', function(){
        frame.addBall(9);
        frame.addBall(1);
        expect(frame._getPins()).toEqual(10);
      });

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

    it('throws an error if the frame is complete', function() {
      frame.addBall(10);
      expect(function(){frame.addBall(5)}).toThrow('Cannot add ball to a frame that is already complete');
    });

    it('throws an error if the score if more than the number of pins left standing', function() {
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

  describe('.isComplete', function(){
    describe('frames 1 to 9', function(){

      it('returns true after a strike on the first ball', function(){
        frame.addBall(10);
        expect(frame.isComplete()).toBe(true);
      });

      it('returns false after a 5 on the first ball', function(){
        frame.addBall(5);
        expect(frame.isComplete()).toBe(false);
      });

      it('returns true after a spare', function(){
        frame.addBall(5);
        frame.addBall(5);
        expect(frame.isComplete()).toBe(true);
      });

      it('returns true after two gutter balls', function(){
        frame.addBall(0);
        frame.addBall(0);
        expect(frame.isComplete()).toBe(true);
      });

    });

    describe('frames 10', function(){

      beforeEach(function() {
        frame = new Frame(10);
      });

      it('returns false after a strike on the first ball', function(){
        frame.addBall(10);
        expect(frame.isComplete()).toBe(false);
      });

      it('returns false after a strike on the first two balls', function(){
        frame.addBall(10);
        frame.addBall(10);
        expect(frame.isComplete()).toBe(false);
      });

      it('returns false after a spare', function(){
        frame.addBall(5);
        frame.addBall(5);
        expect(frame.isComplete()).toBe(false);
      });

      it('returns true after two 3 balls', function(){
        frame.addBall(3);
        frame.addBall(3);
        expect(frame.isComplete()).toBe(true);
      });

      it('returns true after two 2 gutter balls', function(){
        frame.addBall(0);
        frame.addBall(0);
        expect(frame.isComplete()).toBe(true);
      });

      it('returns true after three strikes', function(){
        frame.addBall(0);
        frame.addBall(0);
        expect(frame.isComplete()).toBe(true);
      });

      it('returns true after a spare and a strike', function(){
        frame.addBall(5);
        frame.addBall(5);
        frame.addBall(10);
        expect(frame.isComplete()).toBe(true);
      });

      it('returns true after a spare and a 5', function(){
        frame.addBall(5);
        frame.addBall(5);
        frame.addBall(5);
        expect(frame.isComplete()).toBe(true);
      });

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
        expect(frame.getFrameScore(1,2)).toEqual(11);
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

    });
    
  });

});
