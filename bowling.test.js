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
    this.match = match = new Bowling();

    this.firstBonusFrame = this.frames[2];
    this.secondBonusFrame = this.frames[3];
  });

  describe("#regularScoring", () => {
    it("use regular scoring when in open frame", () => {
      this.match.newFrame(this.exampleFrame);
      this.match.regularScoring();
      expect(this.match.totalScore).toBe(5);
    });
  });
  describe("#recordFrames", () => {
    it("pushes the frame inside the frames array", () => {
      this.match.newFrame(this.exampleFrame);
      this.match.recordFrames();
      expect(this.match.frames).toEqual([this.match.frame]);
    });
  });

  describe("#bonusScoring", () => {
    it("adds a bonus calculated from the first roll, if previous frame is spare", () => {
      let secondMatch = new Bowling();
      secondMatch.newFrame(this.firstBonusFrame);
      secondMatch.regularScoring();
      expect(secondMatch.totalScore).toBe(10);
      secondMatch.newFrame(this.secondBonusFrame);
      secondMatch.regularScoring();
      secondMatch.bonusScoring();
      expect(secondMatch.totalScore).toBe(25);
    });
  });
  describe("#lastFrame", () => {
    it("calculates the points for the last round", () => {
      let lastRound = new Bowling();
      lastRound.frames = this.frames;
      lastRound.newFrame(this.frames[9]);
      lastRound.frame.spare = true;
      lastRound.lastFrame();
      expect(lastRound.totalScore).toBe(16);
    });
  });
});
