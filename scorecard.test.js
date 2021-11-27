const Scorecard = require('./scorecard');

describe('Scorecard class', () => {
  
  it('initializes an instance of a scorecard with a game attribute and score attribute of 0', () => {
    const scorecard = new Scorecard([ [1, 4], [4, 5], [6, 4], [5, 5], [10], [0, 1], [7, 3], [6, 4], [10], [2, 8, 6] ]);
    expect(scorecard.game).toEqual([ [1, 4], [4, 5], [6, 4], [5, 5], [10], [0, 1], [7, 3], [6, 4], [10], [2, 8, 6] ]);
  });

  it('gets the score for a gutter game', () => {
    const scorecard = new Scorecard([ [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0] ]);
    expect(scorecard.game).toEqual([ [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0] ]);
    expect(scorecard.calculateScore()).toEqual(0);
  });

  it('gets the score for a perfect game', () => {
    const scorecard = new Scorecard([ [10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10] ]);
    expect(scorecard.game).toEqual([ [10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10] ]);
    expect(scorecard.calculateScore()).toEqual(300);
  });

});
