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

  it("returns score for game where a spare was scored in the 10th frame", () => {
    arr = [[3,6], [2, 4], [2,4], [3, 6], [5, 2], [3, 6], [2, 4], [2, 4], [3, 6], [5, 5, 8]];
    const scorecard = new Scorecard(arr);
    expect(scorecard.total_score()).toBe(85);
  })

  it("returns score for game where a strike was scored in the 10th frame", () => {
    arr = [[3,6], [2, 4], [2,4], [3, 6], [5, 2], [3, 6], [2, 4], [2, 4], [3, 6], [10, 1, 8]];
    const scorecard = new Scorecard(arr);
    expect(scorecard.total_score()).toBe(86);
  })

  it("returns score for game where multiple strikes were scored in the 10th frame", () => {
    arr = [[3,6], [2, 4], [2,4], [3, 6], [5, 2], [3, 6], [2, 4], [2, 4], [3, 6], [10, 10, 10]];
    const scorecard = new Scorecard(arr);
    expect(scorecard.total_score()).toBe(97);
  })

  it("returns score for game where a spare and a strike were scored in the 10th frame", () => {
    arr = [[3,6], [2, 4], [2,4], [3, 6], [5, 2], [3, 6], [2, 4], [2, 4], [3, 6], [5, 5, 10]];
    const scorecard = new Scorecard(arr);
    expect(scorecard.total_score()).toBe(87);
  })

  it("returns score for mixed game", () => {
    arr = [[10], [3, 7], [10], [2, 7], [5, 4], [9, 1], [4, 5], [4, 6], [10], [10, 4, 6]];
    const scorecard = new Scorecard(arr);
    expect(scorecard.total_score()).toBe(164);
  })

  xit("returns score for perfect game", () => {
    arr = [[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10]];
    const scorecard = new Scorecard(arr);
    expect(scorecard.total_score()).toBe(300);
  })
})