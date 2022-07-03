const Scorecard = require('./scorecard');

describe('Scorecard',() => {
  it('returns a final score of 0 for a gutter game',() => {
    const scorecard = new Scorecard([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
    expect(scorecard.giveFinalScore()).toEqual('Gutter Game: 0 points');    
  })

  it('returns a final score of 300 for a perfect game',() => {
    const scorecard = new Scorecard([[10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]]);
    expect(scorecard.giveFinalScore()).toEqual('Perfect Game: 300 points');
  })

  it('returns a score of 8 when score contains only 0s and one 8',() => {
    const scorecard = new Scorecard([[8, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 8 points');
  })

  it('returns a score of 5 when score contains only 0s and one 5',() => {
    const scorecard = new Scorecard([[5, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 5 points');
  })

  it('returns a score of 37 when score adds up to 48 and there are no strikes or spares',() => {
    const scorecard = new Scorecard([[0, 2], [6, 0], [1, 0], [0, 8], [0, 0], [0, 0], [0, 1], [1, 4], [5, 3], [4, 2]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 37 points');
  })

  it('gives a bonus when a spare is scored',() => {
    const scorecard = new Scorecard([[2, 8], [6, 2]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 24 points');
  })

  it('gives the correct different bonus when a spare is scored',() => {
    const scorecard = new Scorecard([[2, 8], [4, 2]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 20 points');
  })

  it('gives the correct bonus when two spares are scored',() => {
    const scorecard = new Scorecard([[2, 8], [4, 2], [7, 3], [4, 2]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 40 points');
  })

  it('gives the correct score for two spares in a row',() => {
    const scorecard = new Scorecard([[2, 8], [7, 3], [4, 3], [4, 2]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 44 points');
  })

  it('gives a bonus for a strike',() => {
    const scorecard = new Scorecard([[10, 0], [7, 2]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 28 points');
  })

  it('correctly calculates two separate strikes',() => {
    const scorecard = new Scorecard([[10, 0], [7, 2], [10, 0], [7, 2]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 56 points');
  })

  it('correctly calculates two strikes in a row',() => {
    const scorecard = new Scorecard([[10, 0], [10, 0], [7, 2], [7, 2]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 64 points');
  })
  
  it('correctly calculates a full length game that ends in 3 strikes',() => {
    const scorecard = new Scorecard([[8, 0], [8, 0], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [10, 10, 10]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 109 points');
  }) 

  it('recognises a strike when it is in the second roll of a frame',() => {
    const scorecard = new Scorecard([[0, 10], [7, 2]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 28 points');
  })

  it('gives the correct score when the roll after a strike is a 0',() => {
    const scorecard = new Scorecard([[0, 10], [0, 2]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 14 points');
  })
})