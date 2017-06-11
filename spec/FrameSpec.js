'use strict';

describe("Frame", function(){
  var frame;


  beforeEach(function(){
    frame = new Frame();
  });

    it("returns the score for the first bowl", function(){
      expect(frame.getFirstBowl(pins_knocked)).toEqual(0)
    });

    it("returns the score for the second bowl", function(){
      expect(frame.getSecondBowl(pins_knocked)).toEqual(0)
    });

    it("returns the total score of two frames", function(){
      expect(frame.getFrameScore()).toEqual(frame.getFirstBowl(pins_knocked) + frame.getSecondBowl(pins_knocked))
    });

    it('returns total score of total frames regardless of what pins go down', function(){
      frame.getFirstBowl(3);
      frame.getSecondBowl(4);
      expect(frame.getFrameScore()).toEqual(7);
    });

    it('returns a frame with an array with the scores of the first and second roll', function(){
      expect(frame.getFrame()).toEqual([]);
    });

    it('should return a true if the first and second roll is equal to 10 (spare)'), function() {
      frame.addFrameScore(10);
      expect(frame.isSpare()).toBe(true);
    };

    it('should return a true if the first roll is a 10 (strike)'), function() {
      frame.getFirstRoll(10);
      expect(frame.isStrike()).toBe(true);
    };
    //
    // it('should throw an error when trying to get a second roll, if the first roll is 10'), function() {
    //   frame.getFirstRoll(10);
    //   frame.getSecondRoll(2);
    //     throw new Error('already scored 10 in first roll, cannot take second roll');
      // }
      // this.frame = [10,0]
    // };

  });
