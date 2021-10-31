const Bowling = require("./bowling");
const Frame = require("./frame");

describe(Bowling, () => {
  beforeEach(() => {
    this.frames = [
      new Frame(1, 4),
      new Frame(4, 5),
      new Frame(6, 4),
      new Frame(5, 5),
      new Frame(10),
      new Frame(0, 1),
      new Frame(7, 3),
      new Frame(6, 4),
      new Frame(10),
      new Frame(2, 8, 6),
    ];

    this.exampleFrame = new Frame(1, 4);
  });

  describe("#regularScoring", () => {
    it("use regular scoring when in open frame", () => {
      let match = new Bowling(this.exampleFrame);
      match.regularScoring();
      expect(match.totalScore).toBe(5);
    });
  });
  describe("#recordFrames", () => {
    it("pushes the frame inside the frames array", () => {
      let secondMatch = new Bowling(this.exampleFrame);
      secondMatch.recordFrames();
      expect(secondMatch.frames).toEqual([this.exampleFrame]);
    });
  });
  xdescribe("#", () => {
    it("", () => {});
  });
});
