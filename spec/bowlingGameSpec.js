describe("BowlingGame", function () {
  var bowlingGame;

  beforeEach(function () {
    bowlingGame = new BowlingGame();
    bowlingGame.startGame();
  });

  describe("Initialisation", function () {
    it("has a frame index", function () {
      expect(bowlingGame.frameIndex).toEqual(1)
    });

    it("has a frames array", function () {
      expect(bowlingGame.frames.constructor).toBe(Array)
    });
  });

  describe("#startGame", function () {
    it("creates a new frame", function () {
      expect(bowlingGame.frames[1].ball1).toBe(0)
    });

    it("tracks how many rolls are made in the frame", function () {
      expect(bowlingGame.frames[1].numberOfRolls).toBe(0)
    });

    it("has a score", function () {
      expect(bowlingGame.frames[1].score).toBe(0)
    });

    it("tracks if the frame was a spare", function () {
      expect(bowlingGame.frames[1].spare).toBe(false)
    });

    it("tracks if the frame was a strike", function () {
      expect(bowlingGame.frames[1].strike).toBe(false)
    });
  })

  describe("#roll", function () {
    beforeEach(function () {
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

    describe("Spare", function () {
      beforeEach(function () {
        bowlingGame.roll(8);
        bowlingGame.roll(2);

        bowlingGame.roll(2);
        bowlingGame.roll(4);
      });

      it("registers a spare", function () {
        expect(bowlingGame.frames[2].spare).toBeTruthy();
      });

      it("correctly scores the next frame", function () {
        expect(bowlingGame.frames[3].score).toEqual(8);
      });
    });

    describe("Strike", function () {
      beforeEach(function () {
        bowlingGame.roll(10);
      });

      it("registers a strike", function () {
        expect(bowlingGame.frames[2].strike).toBeTruthy();
      });

      it("continues to the next frame", function () {
        expect(bowlingGame.frameIndex).toBe(3)
      });

      it("correctly scores the next frame", function () {
        bowlingGame.roll(4);
        bowlingGame.roll(4);
        expect(bowlingGame.frames[3].score).toEqual(21)
      });

      it("correctly scores multiple strikes", function () {
        bowlingGame.roll(10);
        expect(bowlingGame.frames[3].score).toEqual(33)
      });
    });
  });

  describe("#score", function () {
    beforeEach(function () {
      bowlingGame.roll(5);
      bowlingGame.roll(2);

      bowlingGame.roll(8);
      bowlingGame.roll(2);
    });

    it("returns the player's current score", function () {
      expect(bowlingGame.score()).toEqual(17);
    });

    describe("After a Spare", function () {
      it("returns the correct score", function () {
        bowlingGame.roll(3);
        bowlingGame.roll(6);
        expect(bowlingGame.score()).toEqual(28);
      });
    });

    describe("After a Strike", function () {
      it("returns the correct score", function () {
        bowlingGame.roll(10);
        bowlingGame.roll(2);
        bowlingGame.roll(2);
        expect(bowlingGame.score()).toEqual(47);
      });
    });
  });
});
