const Score = require('../lib/score.js');

describe('Score', () => {
  test('rolling a strike adds next two rolls to score', () => {
    const scorecard = { framesArray : [[10],[5,3]]}
    const score = new Score(scorecard)
    expect(score.calculateScore()).toEqual(26) //18 + 8
  });

  test('rolling consecutive strikes', () => {
    const scorecard = { framesArray : [[10],[10],[5,3]]}
    const score = new Score(scorecard)
    expect(score.calculateScore()).toEqual(51) //25 + 18 + 8
  });

  test('perfect game', () => {
    const scorecard = { framesArray : [[10],[10],[10],[10],[10],[10],[10],[10],[10],[10,10,10]]}
    const score = new Score(scorecard)
    expect(score.calculateScore()).toEqual(300)
  });

  test('rolling a spare adds next roll to score', () => {
    const scorecard = { framesArray : [[5,5],[5,3]]}
    const score = new Score(scorecard)
    expect(score.calculateScore()).toEqual(23) //15 + 8
  });

  test('not rolling spare or strike adds both values with no bonus', () => {
    const scorecard = { framesArray : [[5,3],[4,2]]}
    const score = new Score(scorecard)
    expect(score.calculateScore()).toEqual(14)
  });

  test('gutter game', () => {
    const scorecard = { framesArray : [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]}
    const score = new Score(scorecard)
    expect(score.calculateScore()).toEqual(0)
  });
});
