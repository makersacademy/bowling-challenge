"use strict";

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('#frame_Score', function() {
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
      frame.addRolls(5);
      frame.addRolls(5);
      expect(frame.isSpare()).toEqual(true);
    })

    it('tells us if it is not a strike', function() {
      expect(frame.isSpare()).toEqual(false);
    })
  })

  describe('#addRolls', function() {
    it('adds your score to the roll1', function() {
      frame.addRolls(3);
      expect(frame.frame_Score()).toEqual(3);
    })

    it('adds your score to the roll2', function() {
      frame.addRolls(3);
      frame.addRolls(4);
      expect(frame.frame_Score()).toEqual(7);
    })

    it('throws an error if more than 10 in total', function() {
      frame.addRolls(5);
      expect(function() { frame.addRolls(6); }).toThrowError('Maximum pins are 10, you say you rolled 11??')
    })
  })

  describe('#isFinished', function() {
    it('tells us if the frame is done', function() {
      frame.addRolls(1);
      frame.addRolls(3);
      expect(frame.isFinished()).toEqual(true);
    })
  })
})
