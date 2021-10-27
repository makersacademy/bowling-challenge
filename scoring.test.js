const Scoring = require('./scoring');

describe('.totalScore', () => {
  it('reports 300 points for a perfect game', () => {
    let mockScorecard = { pins: [
      [10, 0],
      [10, 0],
      [10, 0],
      [10, 0],
      [10, 0],
      [10, 0],
      [10, 0],
      [10, 0],
      [10, 0],
      [10, 0, 0]
    ]}
    scoring = new Scoring(mockScorecard)
    expect(scoring.totalScore()).toEqual(300);
  });
});