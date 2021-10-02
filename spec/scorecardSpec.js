'use strict';

describe (Scorecard, () => {
  let scorecard;

  beforeEach(() => {
    scorecard = new Scorecard();
  });

  it('returns true', () => {
    expect(scorecard.frame).toEqual([])
  })
});