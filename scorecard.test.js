const Scorecard = require('./scorecard');

describe('Scorecard class', () => {
  
  it('initializes an instance of a scorecard with a game attribute and score attribute of null', () => {
    const scorecard = new Scorecard([ [1, 4], [4, 5], [6, 4], [5, 5], [10], [0, 1], [7, 3], [6, 4], [10], [2, 8, 6] ]);
    expect(scorecard.game).toEqual([ [1, 4], [4, 5], [6, 4], [5, 5], [10], [0, 1], [7, 3], [6, 4], [10], [2, 8, 6] ]);
    expect(scorecard.score).toEqual(null);
  });

  it('gets the score for a gutter game', () => {
    const scorecard = new Scorecard([ [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0] ]);
    scorecard.calculateScore()
    expect(scorecard.game).toEqual(scorecard.gutterGame);
    expect(scorecard.score).toEqual(0);
  });

  it('gets the score for a perfect game', () => {
    const scorecard = new Scorecard([ [10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10] ]);
    scorecard.calculateScore()
    expect(scorecard.game).toEqual(scorecard.perfectGame);
    expect(scorecard.score).toEqual(300);
  });

  it('add the pins for a game with no strikes or spares', () => {
    const scorecard = new Scorecard([ [3, 2], [7, 1], [5, 3], [2, 3], [4, 5], [2, 5], [4, 5], [3, 1], [2, 4], [3, 3] ]);
    scorecard.calculateScore()
    expect(scorecard.game).toEqual([ [3, 2], [7, 1], [5, 3], [2, 3], [4, 5], [2, 5], [4, 5], [3, 1], [2, 4], [3, 3] ]);
    expect(scorecard.score).toEqual(67);
  });

  it('add the pins for a game that includes strikes and spares', () => {
    const scorecard = new Scorecard([ [1, 4], [4, 5], [6, 4], [5, 5], [10], [0, 1], [7, 3], [6, 4], [10], [2, 8, 6] ]);
    scorecard.calculateScore()
    expect(scorecard.game).toEqual([ [1, 4], [4, 5], [6, 4], [5, 5], [10], [0, 1], [7, 3], [6, 4], [10], [2, 8, 6] ]);
    expect(scorecard.score).toEqual(133);
  });

  it('add the pins for another game that includes strikes and spares', () => {
    const scorecard = new Scorecard([ [3, 0], [5, 3], [0, 4], [10], [5, 2], [6, 4], [10], [2, 1], [10], [2, 8, 4] ]);
    scorecard.calculateScore()
    expect(scorecard.game).toEqual([ [3, 0], [5, 3], [0, 4], [10], [5, 2], [6, 4], [10], [2, 1], [10], [2, 8, 4] ]);
    expect(scorecard.score).toEqual(109);
  });

});
