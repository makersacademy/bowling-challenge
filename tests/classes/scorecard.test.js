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
});