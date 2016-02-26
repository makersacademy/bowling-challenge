'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('adds the score', function() {
    frame.pinsHit(8);
    expect(frame.rolls).toContain(8);
  });

  it('records a strike', function() {
    frame.pinsHit(10);
    expect(frame.isStrike()).toEqual(true);
  });

  it('doesnt record a strike', function() {
    frame.pinsHit(9);
    expect(frame.isStrike()).toEqual(false);
  });

  it('records a spare', function(){
    frame.pinsHit(9);
    frame.pinsHit(1);
    expect(frame.isSpare()).toEqual(true);
  });

  it('doesnt record a spare', function() {
    frame.pinsHit(8);
    frame.pinsHit(1);
    expect(frame.isSpare()).toEqual(false);
  });

  it('keeps track of which roll it is on', function() {
    frame.pinsHit(9);
    expect(frame.numberOfRolls).toEqual(1);
  });

  describe('end of a normal frame', function() {

    it('returns true after two normal pinsHits', function() {
      frame.pinsHit(9);
      frame.pinsHit(0);
      expect(frame.isOver()).toEqual(true);
    });

    it('returns false after one normal pinsHit', function() {
      frame.pinsHit(9);
      expect(frame.isOver()).toEqual(false);
    });

    it('returns true after one pinsHit that scores a strike', function() {
      frame.pinsHit(10);
      expect(frame.isOver()).toEqual(true);
    });

  });

  describe('end of the final frame', function() {

    it('returns false if a strike is scored in the first roll', function() {
      frame.pinsHit(10);
      expect(frame.isFinalFrameOver()).toEqual(false);
    });

    it('returns true when a strike or spare is not scored', function(){
      frame.pinsHit(9);
      frame.pinsHit(0);
      expect(frame.isFinalFrameOver()).toEqual(true);
    })

    it('returns false when a spare is scored', function() {
      frame.pinsHit(9);
      frame.pinsHit(1);
      expect(frame.isFinalFrameOver()).toEqual(false)
    });

    it('returns false after one normal bowl', function() {
      frame.pinsHit(9);
      expect(frame.isFinalFrameOver()).toEqual(false)
    });

    it('returns true after a strike and two more bowls', function() {
      frame.pinsHit(10);
      frame.pinsHit(10);
      frame.pinsHit(10);
      expect(frame.isFinalFrameOver()).toEqual(true)
    });

    it('returns true after a spare and one more bowl', function() {
      frame.pinsHit(5);
      frame.pinsHit(5);
      frame.pinsHit(5);
      expect(frame.isFinalFrameOver()).toEqual(true);
    });
  });
});
