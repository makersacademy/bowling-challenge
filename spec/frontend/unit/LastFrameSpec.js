'use strict';

describe('LastFrame', function () {
  var lastFrame;

  beforeEach(function () {
    lastFrame = new LastFrame();
  });

  describe('new', function(){

    it('should create an instance of LastFrame', function(){
      expect(lastFrame instanceof LastFrame).toBe(true);
    });

  });

  describe('#getRolls', function () {

    it('has a maxium of three rolls', function () {
      expect(lastFrame.getRolls().length).toEqual(3);
      expect(lastFrame.getRolls().every(roll => roll instanceof Roll)).toBe(true);
    });

  });

  describe('#rollsLeft', function () {
    it('two rolls left if first roll is a strike', function () {
      lastFrame.play(10);
      expect(lastFrame.rollsLeft()).toEqual(2);
    });

    it('one roll left if first two rolls resulted in a spare', function () {
      lastFrame.play(4);
      lastFrame.play(6);
      expect(lastFrame.rollsLeft()).toEqual(1);
    });

    it('no extra rolls left if no strike or spare', function(){
      lastFrame.play(1);
      lastFrame.play(5);
      expect(lastFrame.rollsLeft()).toEqual(0);
    });

  });

  describe('#isSpare', function(){

    it('returns false to begin with', function(){
      expect(lastFrame.isSpare()).toBe(false);
    });

    it('returns true when frameScore is 10', function(){
      lastFrame.play(4);
      lastFrame.play(6);
      expect(lastFrame.isSpare()).toBe(true);
    });

    it('returns false when frameScore is less than 10', function(){
      lastFrame.play(4);
      lastFrame.play(1);
      expect(lastFrame.isSpare()).toBe(false);
    });

  });

  describe('#hasStrike', function(){

    it('returns true when there is a strike in first roll', function () {
      lastFrame.play(10);
      expect(lastFrame.hasStrike()).toBe(true);
    });

    it('returns a false when there are no strikes', function () {
      lastFrame.play(5);
      lastFrame.play(5);
      expect(lastFrame.hasStrike()).toBe(false);
    });

  });

  describe('#isDone', function(){

    it('returns false when frame has spare', function(){
      lastFrame.play(4);
      lastFrame.play(6);
      expect(lastFrame.isDone()).toBe(false);
    });

    it('returns false when frame is strike', function(){
      lastFrame.play(10);
      expect(lastFrame.isDone()).toBe(false);
    });

    it('returns truw when frame has no strike or spare', function(){
      lastFrame.play(1);
      lastFrame.play(4);
      expect(lastFrame.isDone()).toBe(true);
    });

  });

  describe('#calculateFrameScore', function(){
    it('should be zero to begin with', function(){
      expect(lastFrame.calculateFrameScore()).toEqual(0);
    });

    it('calculates score for a frame', function(){
      lastFrame.play(4);
      lastFrame.play(1);
      expect(lastFrame.calculateFrameScore()).toEqual(5);
    });
  });

  describe('#getRollScore', function(){

    it('returns the score for that roll', function(){
      lastFrame.play(5);
      lastFrame.play(5);
      lastFrame.play(4)
      expect(lastFrame.getRollScore(0)).toEqual(5);
      expect(lastFrame.getRollScore(2)).toEqual(4);
    });
  });

});
