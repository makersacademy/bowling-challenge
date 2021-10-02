'use strict';

describe('Scorecard', () => {

  let scorecard;

  beforeEach(() => {
    scorecard = new Scorecard();
  });

  it('starts with a score of 0', () => {
    expect(scorecard.runningScore).toEqual(0);
  });
});