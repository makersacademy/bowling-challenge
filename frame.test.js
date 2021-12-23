const Frame = require("./frame");

const frames = [
  new Frame([0, 0], [3, 3], [3, 3]), // normal frames
  new Frame([5, 3], [3, 3], [3, 3]),
  new Frame([5, 5], [3, 3], [3, 3]), // spares
  new Frame([5, 5]),
  new Frame([10, 0], [3, 3], [3, 3]), // strikes
  new Frame([10, 0], [10, 0], [3, 3]),
  new Frame([10, 0]),
  new Frame([5]), // first bowl
];

describe(".bonusType", () => {
  it("returns the type of bonus the frame should receive", () => {
    let expectations = [
      "no_bonus",
      "no_bonus",
      "spare",
      "no_bonus",
      "strike",
      "strike",
      "no_bonus",
      "no_bonus",
    ];
    expectations.forEach((bonus, index) => {
      expect(frames[index].bonusType()).toEqual(bonus);
    });
  });
});

describe(".score", () => {
  it("returns the score value of the frame", () => {
    let expectations = [0, 8, 13, 10, 16, 23, 10, 5];
    expectations.forEach((score, index) => {
      expect(frames[index].score()).toEqual(score);
    });
  });
});
