const Scorecard = require('./scorecard');

describe('Scorecard',() => {
  it('returns a final score of 0 for a gutter game',() => {
    const scorecard = new Scorecard([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
    expect(scorecard.giveFinalScore()).toEqual('Gutter Game: 0 points');    
  })

  it('returns a final score of 300 for a perfect game',() => {
    const scorecard = new Scorecard([[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10]]);
    expect(scorecard.giveFinalScore()).toEqual('Perfect Game: 300 points');
  })

  xit('returns a score of 8 when score contains only 0s and one 8',() => {
    const scorecard = new Scorecard([8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 8 points');
  })

  xit('returns a score of 5 when score contains only 0s and one 5',() => {
    const scorecard = new Scorecard([5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 5 points');
  })

  xit('returns a score of 37 when score adds up to 48 and there are no strikes or spares',() => {
    const scorecard = new Scorecard([0, 2, 6, 0, 1, 0, 0, 8, 0, 0, 0, 0, 0, 1, 1, 4, 5, 3, 4, 2]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 37 points');
  })

  xit('gives a bonus when a spare is scored',() => {
    const scorecard = new Scorecard([2, 8, 6, 2]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 24 points');
  })
})