const Scorecard = require("./scorecard");

const frame0 = { score: () => 0 };
const frame1 = { score: () => 1 };
const frame5 = { score: () => 5 };
const frame9 = { score: () => 9 };
const frame11 = { score: () => 11 };
const frame15 = { score: () => 15 };
const frame16 = { score: () => 16 };
const frame20 = { score: () => 20 };
const frame30 = { score: () => 30 };
const game133 = [
  frame5,
  frame9,
  frame15,
  frame20,
  frame11,
  frame1,
  frame16,
  frame20,
  frame20,
  frame16,
];
const game = new Scorecard();

describe(".score", () => {
  it("returns the score value for a normal game", () => {
    expect(game.score(game133)).toEqual(133);
  });

  it("returns the score value for a gutter game", () => {
    expect(game.score(Array(20).fill(frame0))).toEqual(0);
  });

  it("returns the score value for a perfect game", () => {
    expect(game.score(Array(10).fill(frame30))).toEqual(300);
  });

  it("returns the score value for an unfinished game", () => {
    expect(game.score([frame9, frame1, frame15, frame5])).toEqual(30);
  });

  it("returns 0 when no bowls have been entered", () => {
    expect(game.score()).toEqual(0);
  });
});

describe(".sliceBowlsArray", () => {
  it("slices arrays into an array of frame bowls, e.g. converts [1,2,10,3,4] to [[1,2],[10,0],[3,4]] ", () => {
    expect(game.sliceBowlsArray([1, 2, 10, 3, 4])).toEqual([
      [1, 2],
      [10, 0],
      [3, 4],
    ]);
  });

  it("can slice an empty array", () => {
    expect(game.sliceBowlsArray([])).toEqual([]);
  });

  it("can slice an array with only one value", () => {
    expect(game.sliceBowlsArray([1])).toEqual([[1]]);
  });
});

describe(".board", () => {
  it("returns an array counting up to the score with each frame", () => {
    expect(game.board(game133)).toEqual([
      5, 14, 29, 49, 60, 61, 77, 97, 117, 133,
    ]);
  });
});

describe(".addBowl", () => {
  it("Adds a bowl to the bowls array", () => {
    let newGame = new Scorecard();
    expect(newGame.score()).toBe(0);
    let addBowlTest = (addition, expected) => {
      newGame.addBowl(addition);
      expect(newGame.score()).toBe(expected);
    };
    addBowlTest(5, 5);
    addBowlTest(5, 10);
    addBowlTest(5, 20);
  });
});
