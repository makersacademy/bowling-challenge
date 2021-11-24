const Frame = require("./frame");

const frames = [
  new Frame([0, 0], [3, 3], [3, 3]), // normal frames
  new Frame([5, 3], [3, 3], [3, 3]),
  new Frame([5, 5], [3, 3], [3, 3]), // spares
  new Frame([5, 5]),
  new Frame([10, 0], [3, 3], [3, 3]), // strikes
  new Frame([10, 0], [10, 0], [3, 3]),
  new Frame([10, 0]),
];

describe(".bonus_type", () => {
  it("returns the type of bonus the frame should receive", () => {
    let expectations = [
      "no_bonus",
      "no_bonus",
      "spare",
      "no_bonus",
      "strike",
      "strike",
      "no_bonus",
    ];
    expectations.forEach((roll, index) => {
      expect(frames[index].bonusType()).toEqual(roll);
    });
  });
});
