'use strict';

describe('Frame', function() {
  var frame0;
  var frame1;

  beforeEach(function() {
    frame0 = new Frame(0);
    frame1 = new Frame(1);
  })

  it('has rolls', function() {
    frame0.roll(1, 2);
    expect(frame0.calculatePins()).toEqual(3);
  })

  describe('#calculatePins', function() {
    it('returns total of roll scores', function() {
      frame0.roll(2, 3);
      expect(frame0.calculatePins()).toEqual(5);
    })
  })

  describe('#hasSpare', function() {
    it('can have a spare', function() {
      frame0.roll(2, 8);
      expect(frame0.hasSpare()).toEqual(true);
    })
  })

  describe('#hasStrike', function() {
    it('can have a strike', function() {
      frame0.roll(10);
      expect(frame0.hasStrike()).toEqual(true);
    })
  })

  it('can have a spare', function() {
    frame = new Frame([4,6]);
    expect(frame.isSpare()).toBe(true);
  })

  it('can have a strike', function() {
    frame = new Frame([10]);
    expect(frame.isStrike()).toBe(true);
  })
})
