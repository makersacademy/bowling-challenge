const Scorecard = require("./scorecard");

describe("class: Scorecard", () => {
  beforeEach(() => {
    this.scorecard = new Scorecard();
  });

  describe("function: playRound", () => {
    it("can create a frame instance and fill roll constructors", () => {
      newFrame = this.scorecard.playRound(3, 4);
      expect(newFrame.getRoll1()).toEqual(3);
      expect(newFrame.getRoll2()).toEqual(4);
      expect(newFrame.getTotal()).toEqual(7);
    });
  });

  describe("function: frameData", () => {
    it("can display data about the given frame", () => {});
  });

  describe("function: playGame", () => {
    it("can play a round with no strikes or spares", () => {
      // TODO !!! this.scorecard.playGame()
    })
  })
});
