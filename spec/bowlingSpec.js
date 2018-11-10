'use strict';

describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new BowlingScorer();
  });

  it('starts with a score of zero', function() {
    expect(bowling.returnScore()).toEqual(0)
  });

  it('keeps the score for a frame', function() {
    bowling.bowl(5)
    bowling.bowl(4)
    expect(bowling.frameScore).toEqual([5,4])
  });

  it('totals the score for each frame', function() {
    bowling.bowl(5)
    bowling.bowl(4)
    expect(bowling.returnFrameScore(1)).toEqual(9)
  });

  it('does not immediately return score if spare', function() {
    bowling.bowl(5)
    bowling.bowl(5)
    expect(bowling.returnFrameScore(1)).toEqual(10)
  });           // this will eventually be null ^^

  it('ends a frame when all pins are knocked', function() {
    bowling.bowl(10)
    expect(bowling.frame).toEqual(1)
  });

  it('ends a frame after two rolls', function() {
    bowling.bowl(1)
    bowling.bowl(1)
    expect(bowling.frame).toEqual(2)
  });

  it('knows what a spare is', function() {
    bowling.bowl(9)
    bowling.bowl(1)
    expect(bowling.isSpare(1)).toEqual(true)
  });

  it('knows what a strike is', function() {
    bowling.bowl(10)
    expect(bowling.isStrike(1)).toEqual(true)
  });

  describe('after a spare', function() {
    beforeEach(function() {
      bowling.bowl(9)
      bowling.bowl(1)
    });

    it('adds the next roll to the score of ten', function() {
      bowling.bowl(5)
      bowling.bowl(1)
      expect(bowling.returnFrameScore(1)).toEqual(15)
      expect(bowling.returnFrameScore(2)).toEqual(6)
    });
  });

  describe('after a strike', function() {
    beforeEach(function() {
      bowling.bowl(10)
    });

    it('moves to the next frame', function() {
      expect(bowling.frame).toEqual(2)
    });

    it('adds the next two rolls to the score of ten', function() {
      bowling.bowl(1)
      bowling.bowl(1)
      expect(bowling.returnFrameScore(1)).toEqual(12)
    });
  });

});
