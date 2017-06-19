'use strict';
var Frame = require('../lib/frame');

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('starts empty', function(){
    expect(frame.rolls).toBeEmptyArray();
  });

  describe('#addRoll', function(){

    it('can save the score for the first roll', function(){
      frame.addRoll(5);
      expect(frame.rolls).toEqual([5]);
    });

    it('can save the score for the second roll', function(){
      frame.addRoll(5);
      frame.addRoll(3);
      expect(frame.rolls).toEqual([5, 3]);
    });
  });

  describe('#score', function(){
    it('can calculate the total score of the frame', function(){
      frame.addRoll(1);
      frame.addRoll(7);
      expect(frame.score()).toEqual(8);
    });
  });

  describe('it is a spare', function(){

    beforeEach(function(){
      frame.addRoll(5);
      frame.addRoll(5);
    });

    it('can determine if the rolls result in a spare', function(){
      expect(frame.isSpare).toBe(true);
    });

    it('completes the frame', function(){
      expect(frame.isComplete).toBe(true);
    });
  });

  describe('it is a strike', function(){

    beforeEach(function(){
      frame.addRoll(10);
    });

    it('can determine if the first roll is a strike', function(){
      expect(frame.isStrike).toBe(true);
    });

    it('completes the frame', function(){
      expect(frame.isComplete).toBe(true);
    });
  });
});
