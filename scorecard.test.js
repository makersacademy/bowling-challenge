const Scorecard = require('./scorecard');

describe(Scorecard, () => {
  it("records score for 1 frame when user scores 3 and 6", () => {
    const scorecard = new Scorecard();
    expect(scorecard.add_score([3,6])).toBe(9)
  })

  it("records score for 1 frame when user scores 4 and 4", () => {
    const scorecard = new Scorecard();
    expect(scorecard.add_score([4,4])).toBe(8)
  })
})