const Scorecard = require("./scorecard");

const testCase1 = [
  [1, 4],
  [2, 3],
  [4, 5],
  [0, 3],
  [2, 3],
  [0, 0],
  [3, 6],
  [1, 2],
  [3, 3],
  [5, 4],
  [9, 0],
];

const testCase2 = [
  [1, 4],
  [10, 0],
  [4, 5],
  [0, 3],
  [2, 3],
  [0, 0],
  [3, 6],
  [1, 2],
  [3, 3],
  [5, 4],
  [9, 0],
];

describe("class: Scorecard", () => {
  beforeEach(() => {
    this.scorecard = new Scorecard();
  });

  describe("function: getFrames", () => {
    it("initially has no frames", () => {
      expect(this.scorecard.getFrames()).toEqual([]);
    });
  });

  describe("function: playRound", () => {
    it("can create a frame instance and fill roll constructors", () => {
      const newFrame = this.scorecard.playRound(3, 4);
      expect(newFrame.getRoll1()).toEqual(3);
      expect(newFrame.getRoll2()).toEqual(4);
      expect(newFrame.getTotal()).toEqual(7);
    });
  });

  describe("function: addFrame", () => {
    it("adds a frame to this.frames", () => {
      const newFrame = this.scorecard.playRound(1, 4);
      this.scorecard.addFrame(newFrame);
      expect(this.scorecard.getFrames()).toEqual([newFrame]);
    });
  });

  describe("function: frameData", () => {
    it("can display data about the given frame", () => {});
  });

  describe("function: updateFrame", () => {
    it("can add to a frame's total value", () => {
      const newFrame = this.scorecard.playRound(1, 4);
      this.scorecard.addFrame(newFrame);
      expect(this.scorecard.getFrames()[0].getTotal()).toEqual(5);
      this.scorecard.updateFrameTotal(1, 8);
      expect(this.scorecard.getFrames()[0].getTotal()).toEqual(13);
    });
  });

  describe("function: playGame", () => {
    it("can play a round with no strikes or spares", () => {
      this.scorecard.playGame(testCase1);
      expect(this.scorecard.getFrames()[0].getRoll1()).toEqual(1);
      expect(this.scorecard.getFrames()[4].getRoll2()).toEqual(3);
      expect(this.scorecard.getFrames()[6].getTotal()).toEqual(9);
    });

    it("can play a round with a strike", () => {
      this.scorecard.playGame(testCase2);
      expect(this.scorecard.getFrames()[0].getRoll1()).toEqual(1);
      expect(this.scorecard.getFrames()[4].getRoll2()).toEqual(3);
      expect(this.scorecard.getFrames()[6].getTotal()).toEqual(9);
      expect(this.scorecard.getFrames()[1].getRoll1()).toEqual(10);
      expect(this.scorecard.getFrames()[1].getRoll2()).toEqual(0);
      expect(this.scorecard.getFrames()[1].getTotal()).toEqual(19);
    });
  });
});
// TODO
