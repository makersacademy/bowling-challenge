const Scorecard = require("./scorecard");

describe("Scorecard", () => {
  it("can be constructed", () => {
    const scorecard = new Scorecard();
    expect(scorecard).toBeInstanceOf(Scorecard);
  });
  it("has values of properties set correctly on construction", () => {
    const scorecard = new Scorecard();
    expect(scorecard._currentFrame).toBe(1);
    expect(scorecard._rollsMadeInCurrentFrame).toBe(0);
    expect(scorecard._pinsRemaining).toBe(10);
    expect(scorecard._activeBonusLifetimes).toEqual([]);
    expect(scorecard.historyLog).toEqual([]);
    expect(scorecard.currentScore).toBe(0);
  });
  it(
    "on construction, accepts all and only values between 0 and 10" +
      "inclusive as an argument for .addRoll, throwing an error otherwise",
    () => {
      for (let pinsHit = 0; pinsHit <= 10; pinsHit++) {
        const scorecard = new Scorecard();
        scorecard.addRoll(pinsHit);
      }
      const scorecard1 = new Scorecard();
      expect(() => {
        scorecard1.addRoll(-1);
      }).toThrow(new Error("-1 is not a valid value for pinsHit"));
      const scorecard2 = new Scorecard();
      expect(() => {
        scorecard2.addRoll(11);
      }).toThrow(new Error("11 is not a valid value for pinsHit"));
      const scorecard3 = new Scorecard();
      expect(() => {
        scorecard3.addRoll(3.14);
      }).toThrow(new Error("3.14 is not a valid value for pinsHit"));
    },
  );
  // it("sets .rollsMadeInCurrentFrame to 1 after 1 non-strike roll made", () => {
  //   const scorecard1 = new Scorecard();
  //   scorecard1.addRoll(0);
  //   expect(scorecard1.rollsMadeInCurrentFrame).toBe()
  // });
});
