'use strict';

describe (Frame, () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  it('returns an empty array', () => {
    expect(frame.rolls).toEqual([])
  });

  it('stores pins from 1 roll', () => {
    frame.addPins(1);
    expect(frame.rolls).toEqual([1]);
  });

  it('stores pins from 2 rolls', () => {
    frame.addPins(1);
    frame.addPins(5);
    expect(frame.rolls).toEqual([1, 5]);
  });

  it('returns the total pins rolled', () => {
    frame.addPins(1);
    frame.addPins(5);
    expect(frame.calculateTotal()).toEqual(6);
  });

  it('returns true if a strike was rolled', () => {
    frame.addPins(10);
    expect(frame.isStrike()).toBe(true)
  });

  it('returns true if a spare was rolled', () => {
    frame.addPins(1);
    frame.addPins(9);
    expect(frame.isSpare()).toBe(true);
  });
});