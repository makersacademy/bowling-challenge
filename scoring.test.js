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
  // it('calculates bonus score for first frame', () => {
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
  //   scoring = new Scoring(mockScorecard.pins)
  //   scoring.bonusScore1stFrame()
  //   expect(scoring.bonusScore[0]).toEqual(20);
  // });
  // it('calculates bonus score for first 8 frames', () => {
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
  //   scoring = new Scoring(mockScorecard.pins)
  //   scoring.bonusScore1stFrame()
  //   expect(scoring.bonusScore[0]).toEqual(160);
  // });
});