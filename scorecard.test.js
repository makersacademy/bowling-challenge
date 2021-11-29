const Scorecard = require('./scorecard.js');

describe("scorecard", () => {

  it('constructs a new scorecard', () => {
    const scorecard = new Scorecard
    expect(scorecard.frames).toEqual([]);
    expect(scorecard.MAX_FRAMES).toBe(10);
    expect(scorecard.frameNumber).toBe(1);
    expect(scorecard.totalScore).toBe(0);
  })
})