"use strict";

describe('frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('#attr reader functions', function() {
    it('should start with 0 for frame score', function() {
      expect(frame.frame_Score()).toEqual(0);
    })
  })

  describe('#isStrike', function() {
    it('tells us if it is a strike', function() {
      frame.roll1 = 10;
      expect(frame.isStrike()).toEqual(true);
    })

    it('tells us if it is not a strike', function() {
      expect(frame.isStrike()).toEqual(false);
    })
  })

  describe('#isSpare', function() {
    it('tells us if it is a spare', function() {
      frame.frame_score  = 10;
      expect(frame.isSpare()).toEqual(true);
    })
    it('tells us if it is not a strike', function() {
      expect(frame.isSpare()).toEqual(false);
    })
  })

  describe('#AddRolls', function() {
    it('adds your score to the roll1', function() {
      frame.AddRolls(3);
      expect(frame.frame_Score()).toEqual(3);
    })

    it('adds your score to the roll2', function() {
      frame.AddRolls(3);
      frame.AddRolls(4);
      expect(frame.frame_Score()).toEqual(7);
    })

    it('throws an error if more than 10 in total', function() {
      frame.AddRolls(5);
      expect(function() { frame.AddRolls(6); }).toThrowError('There are not that many pins')
    })
  })

  describe('#isFinished', function() {
    it('tells us if the frame is done', function() {
      frame.AddRolls(1);
      frame.AddRolls(3);
      expect(frame.isFinished()).toEqual(true);
    })
  })
})
