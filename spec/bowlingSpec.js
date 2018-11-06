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
    bowling.firstBowl(5, 1)
    bowling.secondBowl(4, 1)
    expect(bowling.returnFrameScore(1)).toEqual(9)
  });

  it('totals the score for each frame', function() {
    bowling.firstBowl(5, 1)
    bowling.secondBowl(4, 1)
    expect(bowling.returnFrameScore(1)).toEqual(9)
  });

  it('does not immediately return score if spare', function() {
    bowling.firstBowl(5, 1)
    bowling.secondBowl(5, 1)
    expect(bowling.returnFrameScore(1)).toEqual(10)
  });

  it('ends a frame when all pins are knocked', function() {
    bowling.firstBowl(10, 1)
    expect(bowling.returnFrame()).toEqual(2)
  });

  it('ends a frame after two rolls', function() {
    bowling.firstBowl(1, 1)
    bowling.secondBowl(1, 1)
    expect(bowling.returnFrame()).toEqual(2)
  });

  it('knows what a spare is', function() {
    bowling.firstBowl(9, 1)
    bowling.secondBowl(1, 1)
    expect(bowling.isSpare(1)).toEqual(true)
  });

  it('knows what a strike is', function() {
    bowling.firstBowl(10, 1)
    expect(bowling.isStrike(1)).toEqual(true)
  });

  describe('after a spare', function() {

    it('adds the next roll to the score of ten', function() {
      bowling.firstBowl(9, 1)
      bowling.secondBowl(1, 1)
      bowling.firstBowl(5, 2)
      bowling.secondBowl(1, 2)
      expect(bowling.returnFrameScore(1)).toEqual(15)
    });
  });

});
