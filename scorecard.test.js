import Scorecard from './scorecard';
import Frame from './frame.js';

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

  it('returns the current frame total score when rolling twice', () => {
    const frame = new Frame(3, 4);
    scorecard.playBowling(frame);
    expect(scorecard.frames[0].frameTotalScore).toBe(7);
  });

  it('returns the current frame total score when there is a strike', () => {
    const frame = new Frame(10, 0);
    scorecard.playBowling(frame);
    expect(scorecard.frames[0].frameTotalScore).toBe(10);
  });
});
