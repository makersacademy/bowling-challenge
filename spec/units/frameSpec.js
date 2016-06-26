'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() { 
    frame = new Frame;
  });

  describe('at the start of the game', function(){

    it('.isNewFrame() returns true', function() {
      expect(frame.isNewFrame()).toEqual(true);
    });

    it('.isSpare() returns false', function() {
      expect(frame.isSpare()).toEqual(false);
    });

    it('.isStrike() returns false', function() {
      expect(frame.isStrike()).toEqual(false);
    });

    it('.isRollValid() returns true for a valid roll', function() {
      expect(frame.isRollValid(9)).toEqual(true);
    });

    it('.isRollValid() returns false for an invalid roll', function() {
      expect(frame.isRollValid(11)).toEqual(false);
    });
  });

  describe('after one valid roll', function(){

    beforeEach(function() { 
      frame.roll(7);
    });

    it('.isNewFrame() returns false', function() {
      expect(frame.isNewFrame()).toEqual(false);
    });

    it('.isRollValid() returns false for an invalid roll', function() {
      expect(frame.isRollValid(4)).toEqual(false);
    });
  });

  describe('after a strike', function(){

    beforeEach(function() {
      frame.roll(10);
    });

    it('.isStrike() returns true', function() {
      expect(frame.isStrike()).toEqual(true);
    });

    it('.isNewFrame() returns true', function() {
      expect(frame.isNewFrame()).toEqual(true);
    });

    it('.isSpare() returns false', function() {
      expect(frame.isSpare()).toEqual(false);
    });
  });

  describe('after two valid rolls', function(){
    
    beforeEach(function() {
      frame.roll(4);
      frame.roll(4);
    });

    it('.isStrike() returns false', function() {
      expect(frame.isStrike()).toEqual(false);
    });

    it('.isSpare() returns false', function() {
      expect(frame.isSpare()).toEqual(false);
    });

    it('.isNewFrame() returns true', function() {
      expect(frame.isNewFrame()).toEqual(true);
    });
  });

  describe('after two valid rolls giving spare', function(){
    
    beforeEach(function() {
      frame.roll(4);
      frame.roll(6);
    });

    it('.isStrike() returns false', function() {
      expect(frame.isStrike()).toEqual(false);
    });

    it('.isSpare() returns true', function() {
      expect(frame.isSpare()).toEqual(true);
    });
  });

  describe('after two valid rolls giving spare and a third roll', function(){

    it('.isSpare() returns false', function() {
      frame.roll(4);
      frame.roll(6);
      frame.roll(3)
      expect(frame.isSpare()).toEqual(false);
    });
  });
});
