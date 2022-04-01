import Scorecard from './scorecard';
import Frame from './frame';

describe('Scorecard', () => {
  let scorecard;
  let frame1;
  let frame2;
  let frame3;

  beforeEach(() => {
    scorecard = new Scorecard();
    frame1 = new Frame(3, 4);
    frame2 = new Frame(10, 0);
    frame3 = new Frame(5, 5);
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
    scorecard.playBowling(frame1);
    expect(scorecard.frames[0].frameTotalScore).toBe(7);
  });

  it('returns the current frame total score when there is a strike', () => {
    scorecard.playBowling(frame2);
    expect(scorecard.frames[0].frameTotalScore).toBe(10);
  });

  it('has strike defaulted as false', () => {
    expect(scorecard.isStrike).toBe(false);
  });

  it('records true if strike is scored during the frame', () => {
    scorecard.saveStrike(frame2);
    expect(scorecard.isStrike).toBe(true);
  });

  it('records false if no strike is scored during the frame', () => {
    scorecard.saveStrike(frame2);
    expect(scorecard.isStrike).toBe(true);
    scorecard.saveStrike(frame1);
    expect(scorecard.isStrike).toBe(false);
  });

  it('records true if spare during the frame', () => {
    scorecard.saveSpare(frame3);
    expect(scorecard.isSpare).toBe(true);
  });

  it('records false if no spare during the frame', () => {
    scorecard.saveSpare(frame3);
    scorecard.saveSpare(frame1);
    expect(scorecard.isSpare).toBe(false);
  });
});
