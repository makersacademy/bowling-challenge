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

  test('getScore calculates the correct score with multiple frames', () => {
    const scorecard = new Scorecard();
    const frame1 = new Frame(5, 4); // 9 points
    const frame2 = new Frame(10); // Strike, 10 points + next frame's points
    const frame3 = new Frame(3, 6); // 9 points

    scorecard.addFrame(frame1);
    scorecard.addFrame(frame2);
    scorecard.addFrame(frame3);

    const score = scorecard.getScore();
    expect(score).toBe(9 + (10 + 9) + 9); // 9 + 19 + 9 = 37
  });
});