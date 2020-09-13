describe("FrameList", () => {
  var frameList;

  beforeEach(() => {
    frameList = new FrameList();
  });

  describe("roll", () => {
    it("Add roll to the game", () => {
      frameList.roll(7);
      expect(frameList.roll.length).toEqual(1);
    });
  });

  describe("calc", () => {
    it("Return the result of the current game as array", () => {
      frameList.roll(3);
      frameList.roll(1);
      frameList.calc();
      expect(frameList.score).toEqual([3, 1]);
    });

    it("Return the correct score in case of Strike", () => {
      frameList.roll(10);
      frameList.roll(1);
      frameList.roll(1);
      frameList.calc();
      expect(frameList.score).toEqual([12, 1, 1]);
    });

    it("Return the correct score in case of Spare", () => {
      frameList.roll(5);
      frameList.roll(5);
      frameList.roll(1);
      frameList.roll(2);
      frameList.calc();
      expect(frameList.score).toEqual([11, 1, 2]);
    });

    it("Return the correct score in case of Spare plus Strike", () => {
      frameList.roll(5);
      frameList.roll(5);
      frameList.roll(10);
      frameList.roll(2);
      frameList.roll(2);
      frameList.calc();
      expect(frameList.score).toEqual([20, 14, 2, 2]);
    });

    it("Return the correct score in case of 3 Strikes in a roll", () => {
      frameList.roll(10);
      frameList.roll(10);
      frameList.roll(10);
      frameList.roll(2);
      frameList.roll(2);
      frameList.calc();
      expect(frameList.score).toEqual([30, 22, 14, 2, 2]);
    });

    it("Return the correct score in case of 3 Spares in a roll", () => {
      for (let i = 0; i < 4; i++) {
        frameList.roll(5);
      }
      frameList.roll(2);
      frameList.roll(2);
      frameList.calc();
      expect(frameList.score).toEqual([15, 15, 12, 2, 2]);
    });

    it("Return the correct score in case of 13 Strikes in a roll", () => {
      for (let i = 0; i < 11; i++) {
        frameList.roll(10);
      }
      frameList.roll(0);
      frameList.roll(0);
      frameList.calc();
      expect(frameList.total()).toEqual(300);
    });
  });

  describe("total", () => {
    it("Calculate the total score of the game", () => {
      frameList.roll(7);
      frameList.roll(5);
      frameList.calc();
      expect(frameList.total()).toEqual(12);
    });
  });
});
