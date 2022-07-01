const Scorecard = require('./scorecard');

describe('Scorecard',() => {
  it('returns a score of 0 for a gutter game',() => {
    const scorecard = new Scorecard([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect(scorecard.giveFinalScore()).toEqual('Gutter Game: 0 points');    
  })
})