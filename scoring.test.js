const Scoring = require('./scoring');

describe('.regularScorePerFrame', () => {
  // it('reports 300 points for a perfect game', () => {
  //   let mockScorecard = { pins: [
  //     [10, 0],
  //     [10, 0],
  //     [10, 0],
  //     [10, 0],
  //     [10, 0],
  //     [10, 0],
  //     [10, 0],
  //     [10, 0],
  //     [10, 0],
  //     [10, 10, 10]
  //   ]}
  //   scoring = new Scoring(mockScorecard)
  //   expect(scoring.totalScore()).toEqual(300);
  // });
  it('calculates regular score per frame', () => {
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
      [10, 10, 10]
    ]}
    scoring = new Scoring(mockScorecard.pins)
    expect(scoring.regularScorePerFrame()).toEqual(
      [
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10
      ]
    );
  });
});