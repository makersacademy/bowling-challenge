import Scorecard from '../src/scorecard';
import Frame from '../src/frame';
import TenthFrame from '../src/tenthframe';

describe('Scorecard', () => {
  let scorecard;
  let frame1;
  let frame2;
  let frame3;
  let frame4;
  let frame5;
  let finalframe;

  beforeEach(() => {
    scorecard = new Scorecard();
    frame1 = new Frame(3, 4);
    frame2 = new Frame(10, 0);
    frame3 = new Frame(5, 5);
    frame4 = new Frame(10, 0);
    frame5 = new Frame(0, 0);
    finalframe = new TenthFrame(10, 10, 2);
  });

  it('returns the total score (pins) for the current frame', () => {
    scorecard.playBowling(frame1);
    expect(scorecard.calculateScore()).toBe(7);
  });

  it('increases the turn when playing one frame', () => {
    scorecard.playBowling(frame1);
    expect(scorecard.turn).toBe(1);
  });

  it('increases the turns when playing two frames', () => {
    scorecard.playBowling(frame1);
    scorecard.playBowling(frame2);
    expect(scorecard.turn).toBe(2);
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

  it('adds up the rolls from the current frame to the previous one if strike', () => {
    scorecard.playBowling(frame2);
    scorecard.playBowling(frame1);
    scorecard.playBowling(frame5);
    expect(scorecard.score).toBe(24);
  });

  it('adds the following first roll to the previous frame total if spare', () => {
    scorecard.playBowling(frame3);
    scorecard.playBowling(frame1)
    expect(scorecard.score).toBe(20);
  });

  it('updates the previous frame score and total score if it was strike', () => {
    scorecard.playBowling(frame2);
    scorecard.playBowling(frame4);
    scorecard.playBowling(frame1);
    expect(scorecard.score).toBe(47);
  });

  it('Stops the game and returns a message if player tries to play more than 10 frames', () => {
    for (let step = 1; step < 11; step++) {
      scorecard.playBowling(frame1);
    }
    expect(() => {
      scorecard.playBowling(frame1);
    }).toThrow('You have played the last frame. Start a new game!');
  });

  it('calculates the score after the final frame', () => {
    for (let step = 1; step < 10; step++) {
      scorecard.playBowling(frame1);
    }
    scorecard.playBowling(finalframe);
    expect(scorecard.score).toBe(85);
  });
});
