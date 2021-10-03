'use strict';

describe (Scorecard, () => {
  let scorecard;

  beforeEach(() => {
    scorecard = new Scorecard();
  });

  it('returns an empty frame array', () => {
    expect(scorecard.frame).toEqual([])
  });

  it('stores pins from 1 roll', () => {
    scorecard.addPins(1);
    expect(scorecard.frame).toEqual([1]);
  });

  it('stores pins from 2 rolls', () => {
    scorecard.addPins(1);
    scorecard.addPins(5);
    expect(scorecard.frame).toEqual([1, 5]);
  })

  it('returns the total pins rolled', () => {
    scorecard.addPins(1);
    scorecard.addPins(5);
    expect(scorecard.calculateTotal()).toEqual(6);
  });

  it('when initiated, the first frame should have index 0', () => {
    expect(scorecard.frameNum).toEqual(0);
  });
});