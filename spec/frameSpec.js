'use strict';
var Frame = require('../lib/frame');

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('start with a score of 0', function(){
    expect(frame.score()).toEqual(0);
  });

  it('can save the score for the first roll', function(){
    frame.firstRoll(5);
    expect(frame.rolls).toEqual([5, 0]);
  });

  it('can save the score for the second roll', function(){
    frame.secondRoll(3);
    expect(frame.rolls).toEqual([0, 3]);
  });

  it('can calculate the total score of the frame', function(){
    frame.firstRoll(1);
    frame.secondRoll(7);
    expect(frame.score()).toEqual(8);
  });

  describe('it is a spare', function(){

    beforeEach(function(){
      frame.firstRoll(5);
      frame.secondRoll(5);
    });

    it('can determine if the rolls result in a spare', function() {
      expect(frame.isSpare).toBe(true);
    });

    it('completes the frame', function(){
      expect(frame.isComplete).toBe(true);
    });

  });

  describe('it is a strike', function(){

    beforeEach(function(){
      frame.firstRoll(10);
    });

    it('can determine if the firstRoll is a strike', function() {
      expect(frame.isStrike).toBe(true);
    });

    it('completes the frame', function(){
      expect(frame.isComplete).toBe(true);
    });
  });
});
