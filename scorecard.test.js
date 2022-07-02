const Scorecard = require('./scorecard');

describe(Scorecard, () => {
  it("returns score for gutter game", () => {
    arr = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];
    const scorecard = new Scorecard(arr);
    expect(scorecard.total_score()).toBe(0);
  })

  it("returns score for game with no strikes or spares", () => {
    arr = [[3, 6], [2, 4], [2, 4], [3, 6], [5, 2], [3, 6], [2, 4], [2, 4], [3, 6], [5, 2]];
    const scorecard = new Scorecard(arr);
    expect(scorecard.total_score()).toBe(74);
  })

  it("returns score for game where a strike was scored", () => {
    arr = [[10], [2, 4], [2, 4], [3, 6], [5, 2], [3, 6], [2, 4], [2, 4], [3, 6], [5, 2]];
    const scorecard = new Scorecard(arr);
    expect(scorecard.total_score()).toBe(81)
  })

  it("returns score for game where a spare was scored", () => {
    arr = [[3,7], [2, 4], [2,4], [3, 6], [5, 2], [3, 6], [2, 4], [2, 4], [3, 6], [5, 2]];
    const scorecard = new Scorecard(arr);
    expect(scorecard.total_score()).toBe(77);
  })
 
})