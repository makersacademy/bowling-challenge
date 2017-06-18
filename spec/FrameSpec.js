'use strict';

describe("Frame", function(){
  var frame;


  beforeEach(function(){
    frame = new Frame();
  });

    it("returns the score for the first bowl", function(){
      frame.getFirstBowl(2);
      expect(frame.firstBowl).toEqual(2)
    });

    it("returns the score for the second bowl", function(){
      frame.getSecondBowl(4);
      expect(frame.secondBowl).toEqual(4)
    });

    it("returns the total score of two frames", function(){
      frame.getFirstBowl(2);
      frame.getSecondBowl(4);
      expect(frame.addFrameScore()).toEqual(6)
    });

    it('returns a frame with an array with the scores of the first and second bowl', function(){
      frame.getFirstBowl(3);
      frame.getSecondBowl(3)
      expect(frame.getFrame()).toEqual([3,3]);
    });

    it('should return true if the first and second roll is equal to 10, as it is a spare', function() {
      frame.getFirstBowl(3);
      frame.getSecondBowl(7)
      expect(frame.isSpare()).toBe(true);
    });

    it('should return true if the first roll is a 10, as it is a strike', function() {
      frame.getFirstBowl(10);
      expect(frame.isStrike()).toBe(true);
    });

    it('should throw an error if not a number', function() {
      expect(function(){ frame.getFirstBowl('hello')}).toThrow('this is not a number, please enter a number');
    });

    it('should throw an error if not a number', function() {
      expect(function(){ frame.getSecondBowl('hello')}).toThrow('this is not a number, please enter a number');
    });

    it('should throw an error if the first bowl was 10', function() {
      frame.getFirstBowl(10);
      expect( function(){frame.getSecondBowl(3)}).toThrow('cannot bowl again if first bowl was a strike');
    });

    it ('should throw an error if bowl is higher than a 10', function () {
      expect(function(){frame.getFirstBowl(20)}).toThrow('Cannot score higher than 10');
    });

  });
