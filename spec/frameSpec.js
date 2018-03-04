'use strict';

describe('Frame', function() {
  var frame, strike, spare, nine;

  beforeEach(function(){
    frame = new Frame();
    strike = [10];
    spare = [8, 2];
    nine = [8,1];
  });

describe('The isStrike function', function(){
  it('returns true if the frame is a strike', function() {
    expect(frame.isStrike(strike)).toEqual(true);
  });

  it('returns false if the frame is a spare', function() {
    expect(frame.isStrike(spare)).toEqual(false);
  });

  it('returns false if the frame is neither', function() {
    expect(frame.isStrike(nine)).toEqual(false);
  });
});

describe('The isSpare function', function(){
  it('returns true if the frame is a spare', function() {
    expect(frame.isSpare(spare)).toEqual(true);
  });

  it('returns false if the frame is a strike', function() {
    expect(frame.isSpare(strike)).toEqual(false);
  });

  it('returns false if the frame is neither', function() {
    expect(frame.isSpare(nine)).toEqual(false);
  });
});

describe('The hasBonus function', function(){
  it('returns true if the frame has all bonuses included', function() {
    expect(frame.hasBonus([8, 2, 10])).toEqual(true);
  });

  it('returns false if the frame doesn\'t have a bonus', function() {
    expect(frame.hasBonus(strike)).toEqual(false);
  });
});

describe('The remainingPins function', function(){
  it('returns the remaining pins if roll one is not a strike', function(){
    expect(frame.remainingPins([8])).toEqual(ALL_PINS - 8);
  });

  it('returns ten for a strike frame', function() {
    expect(frame.remainingPins(strike)).toEqual(ALL_PINS);
  });

  it('returns ten on roll two', function() {
    expect(frame.remainingPins(nine)).toEqual(ALL_PINS);
  });
});
});
