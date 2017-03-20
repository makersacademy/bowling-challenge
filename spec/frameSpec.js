'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('~constructor', function() {

    it('starts with 10 pins', function(){
        expect(frame.pins).toEqual(10);
    });

    it('starts with an empty ball array', function(){
        expect(frame.balls).toEqual([]);
    });

    it('is not complete', function(){
        expect(frame.complete).not.toBe(true);
    });

  });

  describe('.addBall', function(){

    it('can add a ball, remove pins, check complete on first ball', function() {
      frame.addBall(5);
      expect(frame.balls).toEqual([5]);
      expect(frame.pins).toEqual(5);
      expect(frame.isComplete()).toEqual(false);
    });

    it('can add a ball, remove pins, check complete on first ball', function() {
      frame.addBall(5);
      frame.addBall(1);
      expect(frame.balls).toEqual([5,1]);
      expect(frame.pins).toEqual(4);
      expect(frame.isComplete()).toEqual(true);
    });

    it('can add a ball, remove pins, check complete on first ball strike', function() {
      frame.addBall(10);
      expect(frame.balls).toEqual([10]);
      expect(frame.pins).toEqual(0);
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

  });

});
