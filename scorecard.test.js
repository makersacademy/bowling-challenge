const Scorecard = require('./scorecard');

describe(Scorecard, () => {
  it("returns score for gutter game", () => {
    arr = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];
    const scorecard = new Scorecard(arr);
    expect(scorecard.total_score()).toBe(0);
  })

  

 
})