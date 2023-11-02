const Scorecard = require("./scorecard");

describe("Scorecard", () => {
  it("can be constructed", () => {
    const scorecard = new Scorecard();
    expect(scorecard).toBeInstanceOf(Scorecard);
  });
  it("has values of properties set correctly on construction", () => {
    const scorecard = new Scorecard();
    expect(scorecard.currentFrame).toBe(1);
    expect(scorecard.rollsMadeThisFrame).toBe(0);
    expect(scorecard.pinsRemaining).toBe(10);
    expect(scorecard.activeBonusLifetimes).toEqual([]);
    expect(scorecard.historyLog).toEqual([]);
  })
});
