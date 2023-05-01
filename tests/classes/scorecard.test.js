const Scorecard = require('../../src/classes/scorecard');
const Frame = require('../../src/classes/frame');

describe('Scorecard', () => {
  test('initializes an empty array of frames', () => {
    const scorecard = new Scorecard();
    expect(scorecard.frames).toEqual([]);
  });

  test('adds a frame to the scorecard', () => {
    const scorecard = new Scorecard();
    const frame = new Frame(5, 4);

    scorecard.addFrame(frame);

    expect(scorecard.frames.length).toBe(1);
    expect(scorecard.frames[0]).toBeInstanceOf(Frame);
    expect(scorecard.frames[0]).toEqual(frame);
  });

  test('throws an error when trying to add more frames than the maximum allowed', () => {
    const scorecard = new Scorecard();
    const frame = new Frame(5, 4);

    for (let i = 0; i < scorecard.MAX_FRAMES; i++) {
      scorecard.addFrame(frame);
    }

    expect(() => {
      scorecard.addFrame(frame);
    }).toThrow(`Maximum number of frames (${scorecard.MAX_FRAMES}) reached.`);
  });

  test('getScore calculates the correct score with multiple frames', () => {
    const scorecard = new Scorecard();
    const frame1 = new Frame(5, 4); // 9 points
    const frame2 = new Frame(4, 4); // 8 points
    const frame3 = new Frame(3, 6); // 9 points

    scorecard.addFrame(frame1);
    scorecard.addFrame(frame2);
    scorecard.addFrame(frame3);

    const score = scorecard.getScore();
    expect(score).toBe(9 + 8 + 9); // 26 points
  });

  test('calculateStrikeScore calculates the correct bonus for a strike', () => {
    const scorecard = new Scorecard();
    const frame1 = new Frame(5, 4); // 9 points
    const frame2 = new Frame(10); // strike
    const frame3 = new Frame(3, 6); // 9 points
  
    scorecard.addFrame(frame1);
    scorecard.addFrame(frame2);
    scorecard.addFrame(frame3);
  
    const bonus = scorecard.calculateStrikeScore(1);
    expect(bonus).toBe(9); // bonus is the score of the next two rolls (3, 6)
    expect(scorecard.getScore()).toBe(9 + 10 + 9 + 9); // 37 points
  });

  test('calculateStrikeScore calculates the correct bonus for two strikes in a row', () => {
    const scorecard = new Scorecard();
    const frame1 = new Frame(5, 4); // 9 points
    const frame2 = new Frame(10); // strike
    const frame3 = new Frame(10); // strike
    const frame4 = new Frame(3, 6); // 9 points

    scorecard.addFrame(frame1);
    scorecard.addFrame(frame2);
    scorecard.addFrame(frame3);
    scorecard.addFrame(frame4);

    const bonus1 = scorecard.calculateStrikeScore(1);
    expect(bonus1).toBe(13); // bonus is the score of the next two rolls (10, 3)
    const bonus2 = scorecard.calculateStrikeScore(2);
    expect(bonus2).toBe(9); // bonus is the score of the next two rolls (3, 6)
    expect(scorecard.getScore()).toBe(9 + 10 + 10 + 3 + 6 + 22); // 60 points
  });

  test('calculateSpareScore calculates the correct bonus for a spare', () => {
    const scorecard = new Scorecard();
    const frame1 = new Frame(5, 4); // 9 points
    const frame2 = new Frame(6, 4); // spare
    const frame3 = new Frame(3, 6); // 9 points
  
    scorecard.addFrame(frame1);
    scorecard.addFrame(frame2);
    scorecard.addFrame(frame3);
  
    const bonus = scorecard.calculateSpareScore(1);
    expect(bonus).toBe(3); // bonus is the score of the next roll (3)
    expect(scorecard.getScore()).toBe(9 + 10 + 3 + 6 + 3); // 31 points
  });  

  test('isPerfectGame returns true when all frames are strikes', () => {
    const scorecard = new Scorecard();
    const frame = new Frame(10);

    for (let i = 0; i < scorecard.MAX_FRAMES; i++) {
      scorecard.addFrame(frame);
    }

    expect(scorecard.isPerfectGame()).toBe(true);
  });

  test('isPerfectGame is true and getScore returns 300 when all frames are strikes', () => {
    const scorecard = new Scorecard();
    const frame = new Frame(10);

    for (let i = 0; i < scorecard.MAX_FRAMES; i++) {
      scorecard.addFrame(frame);
    }

    expect(scorecard.isPerfectGame()).toBe(true);
    expect(scorecard.getScore()).toBe(300);
  });
});
