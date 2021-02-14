"use strict";
describe ('Frame', function() {
  let frame;
  
  beforeEach(function() {
    frame = new Frame ();
  })

  it('can score a rolls', function() {
    frame.roll(5);
    expect(frame.showScores()).toEqual([5])
  })

  it('can score two rolls', function() {
    frame.roll(4);
    frame.roll(4);
    expect(frame.showScores()).toEqual([4, 4])
  })

  it('throws an error when you try to roll a third', function() {
    frame.roll(4);
    frame.roll(4);
    expect(function() {
      frame.roll(1);
    }).toThrow(new Error('frame complete'));
  })

    it('throws an error when you roll a strike and try to roll again', function() {
      frame.roll(10);
      expect(function() {
        frame.roll(4);
      }).toThrow(new Error('frame complete'))
    })

  describe('isStrike', function() {
    it('returns true when there is a strike', function() {
      frame.roll(10);
      expect(frame.isStrike()).toEqual(true);
    })

    it('returns false when there is not a strike', function() {
      frame.roll(1);
      expect(frame.isStrike()).toEqual(false);
    })
  })

  describe('strikeCheck', function() {
    it('alters the scores to equal strike', function() {
      frame.roll(10);
      expect(frame.scores).toEqual(["strike"]);
    })
  })

  describe('isSpare', function() {
    it('returns true when there is a spare', function() {
      frame.roll(4);
      frame.roll(6);
      expect(frame.isSpare()).toEqual(true);
    })

    it('returns false when there is not a spare', function() {
      frame.roll(4);
      frame.roll(3);
      expect(frame.isSpare()).toEqual(false);
    })
  })

  describe('spareCheck', function() {
    it('alters the scores to equal spare', function() {
      frame.roll(5);
      frame.roll(5);
      expect(frame.scores).toEqual(["spare"]);
    })
  })

  describe('isComplete', function() {
    it('returns true when complete', function() {
      frame.roll(10);
      expect(frame.isComplete()).toEqual(true);
    })
  })
})