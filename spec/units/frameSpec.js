'use strict';

describe('Frame', function() {
  var frame;

  describe('after one roll (5)', function(){

    beforeEach(function() { 
      frame = new Frame(5);
    });

    it('.isSpare() returns false', function() {
      expect(frame.isSpare()).toEqual(false);
    });

    it('.isStrike() returns false', function() {
      expect(frame.isStrike()).toEqual(false);
    });

    it('.isComplete() returns false', function() {
      expect(frame.isComplete()).toEqual(false);
    });

    it('.getScore() returns the correct score', function() {
      expect(frame.getScore()).toEqual(5);
    });
  });

  describe('after a strike', function(){

    beforeEach(function() {
      frame = new Frame(10);
    });

    it('.isStrike() returns true', function() {
      expect(frame.isStrike()).toEqual(true);
    });

    it('.isSpare() returns false', function() {
      expect(frame.isSpare()).toEqual(false);
    });

    it('.isComplete() returns true', function() {
      expect(frame.isComplete()).toEqual(true);
    });

    it('.getScore() returns the correct score', function() {
      expect(frame.getScore()).toEqual(10);
    });
  });

  describe('after two valid rolls', function(){
    
    beforeEach(function() {
      frame = new Frame(4);
      frame.roll(4);
    });

    it('.isStrike() returns false', function() {
      expect(frame.isStrike()).toEqual(false);
    });

    it('.isSpare() returns false', function() {
      expect(frame.isSpare()).toEqual(false);
    });

    it('.isComplete() returns true', function() {
      expect(frame.isComplete()).toEqual(true);
    });

    it('.getScore() returns the correct score', function() {
      expect(frame.getScore()).toEqual(8);
    });
  });

  describe('after two valid rolls giving spare', function(){
    
    beforeEach(function() {
      frame = new Frame(4);
      frame.roll(6);
    });

    it('.isStrike() returns false', function() {
      expect(frame.isStrike()).toEqual(false);
    });

    it('.isSpare() returns true', function() {
      expect(frame.isSpare()).toEqual(true);
    });

    it('.isComplete() returns true', function() {
      expect(frame.isComplete()).toEqual(true);
    });

    it('.getScore() returns the correct score', function() {
      expect(frame.getScore()).toEqual(10);
    });
  });
});
