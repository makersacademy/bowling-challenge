const Scorecard = require('./scorecard');

describe('Scorecard',() => {
  it('returns a final score of 0 for a gutter game',() => {
    const scorecard = new Scorecard([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect(scorecard.giveFinalScore()).toEqual('Gutter Game: 0 points');    
  })

  it('returns a final score of 300 for a perfect game',() => {
    const scorecard = new Scorecard([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
    expect(scorecard.giveFinalScore()).toEqual('Perfect Game: 300 points');
  })

  it('returns a score of 8 when score contains only 0s and one 8',() => {
    const scorecard = new Scorecard([8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 8 points');
  })
})