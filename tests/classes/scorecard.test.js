const Scorecard = require('../../src/classes/scorecard');

describe('Scorecard', () => {
  test('initializes an empty array of frames', () => {
    const scorecard = new Scorecard();

    expect(scorecard.frames).toEqual([]);
  });
});