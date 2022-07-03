const Scorecard = require('./scorecard');

describe('when there is a gutter game',() => {
  it('returns a final score of 0',() => {
    const scorecard = new Scorecard([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
    expect(scorecard.giveFinalScore()).toEqual('Gutter Game: 0 points');    
  });
})

describe('when they achieve a perfect score',() => {
  it('returns a final score of 300 for a perfect game',() => {
    const scorecard = new Scorecard([[10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]]);
    expect(scorecard.giveFinalScore()).toEqual('Perfect Game: 300 points');
  })
});

describe('when there are no strikes or spares',() => {
  it('returns a score of 8 when score contains only 0s and one 8',() => {
    const scorecard = new Scorecard([[8, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 8 points');
  })

  it('returns a score of 5 when score contains only 0s and one 5',() => {
    const scorecard = new Scorecard([[5, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 5 points');
  })

  it('returns a score of 37 when score adds up to 37',() => {
    const scorecard = new Scorecard([[0, 2], [6, 0], [1, 0], [0, 8], [0, 0], [0, 0], [0, 1], [1, 4], [5, 3], [4, 2]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 37 points');
  })
})

describe('when they score a spare',() => {
  it('adds a bonus of the value of the next roll',() => {
    const scorecard = new Scorecard([[2, 8], [6, 2]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 24 points');
  })

  it('adds the correct different bonus when the next roll is 4',() => {
    const scorecard = new Scorecard([[2, 8], [4, 2]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 20 points');
  })
})

describe('when two spares are scored',() => {
  it('gives the correct bonus when the two spares are not next to each other',() => {
    const scorecard = new Scorecard([[2, 8], [4, 2], [7, 3], [4, 2]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 40 points');
  })

  it('gives the correct bonus when they are next to each other',() => {
    const scorecard = new Scorecard([[2, 8], [7, 3], [4, 3], [4, 2]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 44 points');
  })
})

describe('when a strike is scored',() => {
  it('adds a bonus of the value of the next frame',() => {
    const scorecard = new Scorecard([[10, 0], [7, 2]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 28 points');
  })

  it('correctly gives this bonus for two separate strikes',() => {
    const scorecard = new Scorecard([[10, 0], [7, 2], [10, 0], [7, 2]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 56 points');
  })

})

describe('when the final frame is 3 strikes',() => {
  it('gives a value of 30 for the final frame',() => {
    const scorecard = new Scorecard([[8, 0], [8, 0], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [10, 10, 10]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 109 points');
  }) 
})

describe('when the strike is in the second roll of a frame',() => {
  it('adds a bonus of the value of the next frame',() => {
    const scorecard = new Scorecard([[0, 10], [7, 2]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 28 points');
  })

  it('gives the correct score when the roll after a strike is a 0',() => {
    const scorecard = new Scorecard([[0, 10], [0, 2]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 14 points');
  })

  it('gives a bonus of 0 both rolls after a strike are 0s',() => {
    const scorecard = new Scorecard([[0, 10], [0, 0]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 10 points');
  })
})

describe('when two strikes are rolled in a row',() => {
  it('adds the value of the first roll of the third frame to the bonus for the first strike',() => {
    const scorecard = new Scorecard([[10, 0], [10, 0], [7, 2], [7, 2]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 64 points');
  })

  it('adds a bonus of 10 for the first strike when both strikes are rolled on the second roll',() => {
    const scorecard = new Scorecard([[0, 10], [0, 10], [5, 3]]);
    expect(scorecard.giveFinalScore()).toEqual('You scored 46 points');
  }) 
})