const Scoring = require('./scoring');

describe('Scoring a perfect game', () => {
  it('reports total score', () => {
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
    scoring.regularScorePerFrame()
    scoring.bonusScoreAllFrames()
    scoring.totalScoreAllFrames()
    scoring.findTotalScore()
    expect(scoring.totalScore).toEqual(300);
  });
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
    scoring.regularScorePerFrame()
    expect(scoring.regularScore).toEqual(
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
  it('calculates bonus score per frame', () => {
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
    scoring.bonusScoreAllFrames()
    expect(scoring.bonusScore).toEqual(
      [
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20
      ]
    );
  });
  it('calculates total points per frame', () => {
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
    scoring.regularScorePerFrame()
    scoring.bonusScoreAllFrames()
    scoring.totalScoreAllFrames()
    expect(scoring.totalScorePerFrame).toEqual(
    [
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30
    ]
  );
  });
});






describe('Scoring an imperfect game', () => {
  it('reports total score', () => {
    let mockScorecard = { pins: [
      [10, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 9, 10]
    ]}
    scoring = new Scoring(mockScorecard.pins)
    scoring.regularScorePerFrame()
    scoring.bonusScoreAllFrames()
    scoring.totalScoreAllFrames()
    scoring.findTotalScore()
    expect(scoring.totalScore).toEqual(39);
  });
  it('calculates regular score', () => {
    let mockScorecard = { pins: [
      [10, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 9, 10]
    ]}
    scoring = new Scoring(mockScorecard.pins)
    scoring.regularScorePerFrame()
    expect(scoring.regularScore).toEqual(
      [
        10,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        10
      ]
    );
  });
  it('calculates bonus score', () => {
    let mockScorecard = { pins: [
      [10, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 9, 10]
    ]}
    scoring = new Scoring(mockScorecard.pins)
    scoring.bonusScoreAllFrames()
    expect(scoring.bonusScore).toEqual(
      [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        10
      ]
    );
  });
  it('calculates total points per frame for perfect game', () => {
    let mockScorecard = { pins: [
      [10, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 9, 10]
    ]}
    scoring = new Scoring(mockScorecard.pins)
    scoring.regularScorePerFrame()
    scoring.bonusScoreAllFrames()
    scoring.totalScoreAllFrames()
    expect(scoring.totalScorePerFrame).toEqual(
    [
      11,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      20
    ]
  );
  });
});