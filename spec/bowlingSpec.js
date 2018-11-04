'use strict';

describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new BowlingScorer();
  });

  it('starts with a score of zero', function() {
    expect(bowling.returnFrameScore(1)).toEqual(0)
  });

  it('adds the score of a frame (2 bowls)', function() {
    bowling.bowl(5)
    bowling.bowl(4)
    expect(bowling.returnFrameScore(1)).toEqual(9)
  });

  it('adds ten if spare', function() {
    bowling.bowl(5)
    bowling.bowl(5)
    expect(bowling.returnFrameScore()).toEqual(10)
  });

  it('ends a frame when all pins are knocked', function() {
    bowling.bowl(10)
    expect(bowling.returnFrame()).toEqual(2)
  });

  it('ends a frame after two rolls', function() {
    bowling.bowl(1)
    bowling.bowl(1)
    expect(bowling.returnFrame()).toEqual(2)
  });

  it('resets to two bowls after a frame ends', function() {
    bowling.bowl(1)
    bowling.bowl(1)
    expect(bowling.returnBowls()).toEqual(2)
  });

  describe('after a spare', function() {

    it('adds the next roll to the score of ten', function() {
      bowling.bowl(9)
      bowling.bowl(1)
      bowling.bowl(5)
      expect(bowling.returnFrameScore(1)).toEqual(15)
    });
  });

});
