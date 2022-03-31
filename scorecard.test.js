import Scorecard from './scorecard';

describe('Scorecard', () => {
  let scorecard;

  beforeEach(() => {
    scorecard = new Scorecard();
  });

  it('uses the number of pins in roll to calculate the score', () => {
    scorecard.roll(2);
    expect(scorecard.calculateScore()).toBe(2);
  });

  it('adds up the score for pins knocked down in multiple rolls', () => {
    scorecard.roll(2);
    scorecard.roll(5);
    expect(scorecard.calculateScore()).toBe(7);
  });
});
