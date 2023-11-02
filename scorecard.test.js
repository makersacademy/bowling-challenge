const Scorecard = require("./scorecard");

let cases = null;

const scorecardWithRolls = (rolls) => {
  const scorecard = new Scorecard();
  rolls.forEach((roll) => {
    scorecard.addRoll(roll);
  });
  return scorecard;
};

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
    expect(scorecard.gameFinished).toBe(false);
  });
  it(
    "on construction, accepts all and only values between 0 and 10 " +
      "inclusive as an argument for .addRoll, throwing an error otherwise",
    () => {
      for (let pinsHit = 0; pinsHit <= 10; pinsHit++) {
        const scorecard = new Scorecard();
        expect(() => scorecard.addRoll(pinsHit)).not.toThrow(Error);
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
  cases = [[0], [1], [9]];
  test.each(cases)(
    "when a non-strike roll hitting %i pins is made on roll 1 of frame 1:\n" +
      "- it does not change ._currentFrame",
    (pinsHit) => {
      const scorecard = scorecardWithRolls([pinsHit]);
      expect(scorecard._currentFrame).toBe(1);
    },
  );
  cases = [[0], [1], [9]];
  test.each(cases)(
    "when a non-strike roll hitting %i pins is made on roll 1 of frame 1:\n" +
      "- it sets ._rollsMadeInCurrentFrame to 1",
    (pinsHit) => {
      const scorecard = scorecardWithRolls([pinsHit]);
      expect(scorecard._rollsMadeInCurrentFrame).toBe(1);
    },
  );
  cases = [
    [0, 10],
    [1, 9],
    [9, 1],
  ];
  test.each(cases)(
    "when a non-strike roll hitting %i pins is made on roll 1 of frame 1:\n" +
      "- it sets ._pinsRemaining to %i",
    (pinsHit, expectedPinsRemaining) => {
      const scorecard = scorecardWithRolls([pinsHit]);
      expect(scorecard._pinsRemaining).toBe(expectedPinsRemaining);
    },
  );
  cases = [[0], [1], [9]];
  test.each(cases)(
    "when a non-strike roll hitting %i pins is made on roll 1 of frame 1:\n" +
      "- it does not modify ._activeBonusLifetimes",
    (pinsHit) => {
      const scorecard = scorecardWithRolls([pinsHit]);
      expect(scorecard._activeBonusLifetimes).toEqual([]);
    },
  );
  cases = [[0], [1], [9]];
  test.each(cases)(
    "when a non-strike roll hitting %i pins is made on roll 1 of frame 1:\n" +
      "- it appends the correct object to .historyLog",
    (pinsHit) => {
      const scorecard = scorecardWithRolls([pinsHit]);
      expect(scorecard.historyLog).toEqual([
        { frame: 1, rollInFrame: 1, pinsHit: pinsHit },
      ]);
    },
  );
  cases = [[0], [1], [9]];
  test.each(cases)(
    "when a non-strike roll hitting %i pins is made on roll 1 of frame 1:\n" +
      "- it updates .currentScore correctly",
    (pinsHit) => {
      const scorecard = scorecardWithRolls([pinsHit]);
      expect(scorecard.currentScore).toBe(pinsHit);
    },
  );
  it(
    "upon a strike being rolled in roll 1 of frame 1:\n" +
      "- it changes ._currentFrame to 2",
    () => {
      const scorecard = scorecardWithRolls([10]);
      expect(scorecard._currentFrame).toBe(2);
    },
  );
  it(
    "upon a strike being rolled in roll 1 of frame 1:\n" +
      "- it sets ._rollsMadeInCurrentFrame to 0",
    () => {
      const scorecard = scorecardWithRolls([10]);
      expect(scorecard._rollsMadeInCurrentFrame).toBe(0);
    },
  );
  it(
    "upon a strike being rolled in roll 1 of frame 1:\n" +
      "- it sets ._pinsRemaining to 10",
    () => {
      const scorecard = scorecardWithRolls([10]);
      expect(scorecard._pinsRemaining).toBe(10);
    },
  );
  it(
    "upon a strike being rolled in roll 1 of frame 1:\n" +
      "- it sets ._activeBonusLifetimes to [2]",
    () => {
      const scorecard = scorecardWithRolls([10]);
      expect(scorecard._activeBonusLifetimes).toEqual([2]);
    },
  );
  it(
    "upon a strike being rolled in roll 1 of frame 1:\n" +
      "- it appends the correct object to .historyLog",
    () => {
      const scorecard = scorecardWithRolls([10]);
      expect(scorecard.historyLog).toEqual([
        { frame: 1, rollInFrame: 1, pinsHit: 10 },
      ]);
    },
  );
  it(
    "upon a strike being rolled in roll 1 of frame 1:\n" +
      "- it updates .currentScore correctly",
    () => {
      const scorecard = scorecardWithRolls([10]);
      expect(scorecard.currentScore).toBe(10);
    },
  );
  it(
    "upon 2 and then 3 being rolled in frame 1:\n" +
      "- it sets ._currentFrame to 2",
    () => {
      const scorecard = scorecardWithRolls([2, 3]);
      expect(scorecard._currentFrame).toBe(2);
    },
  );
  it(
    "upon 2 and then 3 being rolled in frame 1:\n" +
      "- it sets ._rollsMadeInCurrentFrame to 0",
    () => {
      const scorecard = scorecardWithRolls([2, 3]);
      expect(scorecard._rollsMadeInCurrentFrame).toBe(0);
    },
  );
  it(
    "upon 2 and then 3 being rolled in frame 1:\n" +
      "- it sets ._pinsRemaining to 10",
    () => {
      const scorecard = scorecardWithRolls([2, 3]);
      expect(scorecard._pinsRemaining).toBe(10);
    },
  );
  it(
    "upon 2 and then 3 being rolled in frame 1:\n" +
      "- it does not modify ._activeBonusLifetimes",
    () => {
      const scorecard = scorecardWithRolls([2, 3]);
      expect(scorecard._activeBonusLifetimes).toEqual([]);
    },
  );
  it(
    "upon 2 and then 3 being rolled in frame 1:\n" +
      "- it pushes two corresponding objects to .historyLog",
    () => {
      const scorecard = scorecardWithRolls([2, 3]);
      expect(scorecard.historyLog).toEqual([
        { frame: 1, rollInFrame: 1, pinsHit: 2 },
        { frame: 1, rollInFrame: 2, pinsHit: 3 },
      ]);
    },
  );
  it(
    "upon 2 and then 3 being rolled in frame 1:\n" +
      "- it sets .currentScore to 5",
    () => {
      const scorecard = scorecardWithRolls([2, 3]);
      expect(scorecard.currentScore).toBe(5);
    },
  );
  it(
    "upon 6 and then 4 being rolled in frame 1:\n" +
      "- it sets ._currentFrame to 2",
    () => {
      const scorecard = scorecardWithRolls([6, 4]);
      expect(scorecard._currentFrame).toBe(2);
    },
  );
  it(
    "upon 6 and then 4 being rolled in frame 1:\n" +
      "- it sets ._rollsMadeInCurrentFrame to 0",
    () => {
      const scorecard = scorecardWithRolls([6, 4]);
      expect(scorecard._rollsMadeInCurrentFrame).toBe(0);
    },
  );
  it(
    "upon 6 and then 4 being rolled in frame 1:\n" +
      "- it sets ._pinsRemaining to 10",
    () => {
      const scorecard = scorecardWithRolls([6, 4]);
      expect(scorecard._pinsRemaining).toBe(10);
    },
  );
  it(
    "upon 6 and then 4 being rolled in frame 1:\n" +
      "- it sets ._activeBonusLifetimes to [1]",
    () => {
      const scorecard = scorecardWithRolls([6, 4]);
      expect(scorecard._activeBonusLifetimes).toEqual([1]);
    },
  );
  it(
    "upon 6 and then 4 being rolled in frame 1:\n" +
      "- it pushes two corresponding objects to .historyLog",
    () => {
      const scorecard = scorecardWithRolls([6, 4]);
      expect(scorecard.historyLog).toEqual([
        { frame: 1, rollInFrame: 1, pinsHit: 6 },
        { frame: 1, rollInFrame: 2, pinsHit: 4 },
      ]);
    },
  );
  it(
    "upon 6 and then 4 being rolled in frame 1:\n" +
      "- it sets .currentScore to 10",
    () => {
      const scorecard = scorecardWithRolls([6, 4]);
      expect(scorecard.currentScore).toBe(10);
    },
  );
  it(
    "upon 1 then 2 being rolled in frame 1, then 3 in frame 2:\n" +
      "- it sets ._currentFrame to 2",
    () => {
      const scorecard = scorecardWithRolls([1, 2, 3]);
      expect(scorecard._currentFrame).toBe(2);
    },
  );
  it(
    "upon 1 then 2 being rolled in frame 1, then 3 in frame 2:\n" +
      "- it sets ._rollsMadeInCurrentFrame to 1",
    () => {
      const scorecard = scorecardWithRolls([1, 2, 3]);
      expect(scorecard._rollsMadeInCurrentFrame).toBe(1);
    },
  );
  it(
    "upon 1 then 2 being rolled in frame 1, then 3 in frame 2:\n" +
      "- it sets ._pinsRemaining to 7",
    () => {
      const scorecard = scorecardWithRolls([1, 2, 3]);
      expect(scorecard._pinsRemaining).toBe(7);
    },
  );
  it(
    "upon 1 then 2 being rolled in frame 1, then 3 in frame 2:\n" +
      "- it does not modify ._activeBonusLifetimes",
    () => {
      const scorecard = scorecardWithRolls([1, 2, 3]);
      expect(scorecard._activeBonusLifetimes).toEqual([]);
    },
  );
  it(
    "upon 1 then 2 being rolled in frame 1, then 3 in frame 2:\n" +
      "- it pushes three corresponding objects to .historyLog",
    () => {
      const scorecard = scorecardWithRolls([1, 2, 3]);
      expect(scorecard.historyLog).toEqual([
        { frame: 1, rollInFrame: 1, pinsHit: 1 },
        { frame: 1, rollInFrame: 2, pinsHit: 2 },
        { frame: 2, rollInFrame: 1, pinsHit: 3 },
      ]);
    },
  );
  it(
    "upon 1 then 2 being rolled in frame 1, then 3 in frame 2:\n" +
      "- it sets .currentScore to 6",
    () => {
      const scorecard = scorecardWithRolls([1, 2, 3]);
      expect(scorecard.currentScore).toBe(6);
    },
  );
  it(
    "upon a strike in frame 1, then a roll of 7 in frame 2:\n" +
      "- it sets ._currentFrame to 2",
    () => {
      const scorecard = scorecardWithRolls([10, 7]);
      expect(scorecard._currentFrame).toBe(2);
    },
  );
  it(
    "upon a strike in frame 1, then a roll of 7 in frame 2:\n" +
      "- it sets ._rollsMadeInCurrentFrame to 1",
    () => {
      const scorecard = scorecardWithRolls([10, 7]);
      expect(scorecard._rollsMadeInCurrentFrame).toBe(1);
    },
  );
  it(
    "upon a strike in frame 1, then a roll of 7 in frame 2:\n" +
      "- it sets ._pinsRemaining to 3",
    () => {
      const scorecard = scorecardWithRolls([10, 7]);
      expect(scorecard._pinsRemaining).toBe(3);
    },
  );
  it(
    "upon a strike in frame 1, then a roll of 7 in frame 2:\n" +
      "- it sets ._activeBonusLifetimes to [1]",
    () => {
      const scorecard = scorecardWithRolls([10, 7]);
      expect(scorecard._activeBonusLifetimes).toEqual([1]);
    },
  );
  it(
    "upon a strike in frame 1, then a roll of 7 in frame 2:\n" +
      "- it pushes two corresponding objects to .historyLog",
    () => {
      const scorecard = scorecardWithRolls([10, 7]);
      expect(scorecard.historyLog).toEqual([
        { frame: 1, rollInFrame: 1, pinsHit: 10 },
        { frame: 2, rollInFrame: 1, pinsHit: 7 },
      ]);
    },
  );
  it(
    "upon a strike in frame 1, then a roll of 7 in frame 2:\n" +
      "- it sets .currentScore to 24",
    () => {
      const scorecard = scorecardWithRolls([10, 7]);
      expect(scorecard.currentScore).toBe(24);
    },
  );
});
