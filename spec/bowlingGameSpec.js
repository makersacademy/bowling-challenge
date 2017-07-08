describe("BowlingGame", function () {
  var bowlingGame;

  beforeEach(function () {
    bowlingGame = new BowlingGame();
  });

  describe("Initialisation", function () {
    it("has a frame index", function () {
      expect(bowlingGame.frameIndex).toEqual(1)
    });

    it("has a frames array", function () {
      expect(bowlingGame.frames.constructor).toBe(Array)
    });
  });

  describe("#newFrame", function () {
    beforeEach(function () {
      bowlingGame.newFrame();
    });

    it("creates a new frame", function () {
      expect(bowlingGame.frames[1].ball1).toBe(0)
    });

    it("tracks how many rolls are made in the frame", function () {
      expect(bowlingGame.frames[1].numberOfRolls).toBe(0)
    });

    it("has a score", function () {
      expect(bowlingGame.frames[1].score).toBe(0)
    });
  })

  describe("#roll", function () {
    beforeEach(function () {
      bowlingGame.newFrame();
      bowlingGame.roll(5);
      bowlingGame.roll(3);
    });

    it("adds the score for the first roll to the current frame", function () {
      expect(bowlingGame.frames[1].ball1).toBe(5)
    });

    it("adds the score for the second roll to the current frame", function () {
      expect(bowlingGame.frames[1].ball2).toBe(3)
    });

    it("continues to the next frame", function () {
      expect(bowlingGame.frameIndex).toBe(2)
    });

    describe("Neither a strike nor spare", function () {
      it("calculates the score", function () {
        expect(bowlingGame.frames[1].score).toBe(8)
      });
    });

    describe("Strike", function () {
      beforeEach(function () {
        bowlingGame.newFrame();
        bowlingGame.roll(10);
      });

      xit("", function () {

      });
    });
  });
});
