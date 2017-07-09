describe("Score", function () {
  var score;

  beforeEach(function () {
    score = new Score();
    score.newFrame();
    score.newFrame();
  });

  describe("Initialisation", function () {
    it("has a frames array", function () {
      expect(score.frames.constructor).toBe(Array);
    });

    it("has a frame counter", function () {
      expect(score.frameIndex).toBe(1);
    });
  });

  describe("#newFrame", function () {
    it("creates a new frame", function () {
      expect(score.frames[0].constructor).toBe(Frame);
    });

    it("new frames have the correct attributes", function () {
      expect(score.frames[0].ball1).toBe(0);
    });
  });

  describe("#record", function () {
    beforeEach(function () {
      score.record(5);
      score.record(3);
    });

    it("adds the score for the first roll to the current frame", function () {
      expect(score.frames[1].ball1).toBe(5);
    });

    it("adds the score for the second roll to the current frame", function () {
      expect(score.frames[1].ball2).toBe(3);
    });

    it("continues to the next frame", function () {
      expect(score.frameIndex).toBe(2);
    });

    describe("Neither a strike nor spare", function () {
      it("calculates the score", function () {
        expect(score.frames[1].score).toBe(8);
      });
    });

    describe("Spare", function () {
      beforeEach(function () {
        score.record(8);
        score.record(2);

        score.record(2);
        score.record(4);
      });

      it("registers a spare", function () {
        expect(score.frames[2].spare).toBeTruthy();
      });

      it("correctly scores the next frame", function () {
        expect(score.frames[3].score).toEqual(8);
      });
    });

    describe("Strike", function () {
      beforeEach(function () {
        score.record(10);
      });

      it("registers a strike", function () {
        expect(score.frames[2].strike).toBeTruthy();
      });

      it("continues to the next frame", function () {
        expect(score.frameIndex).toBe(3);
      });

      it("correctly calculates the score of the next frame", function () {
        score.record(4);
        score.record(4);
        expect(score.frames[3].score).toEqual(21);
      });

      it("correctly calculates the score of multiple strikes", function () {
        score.record(10);
        expect(score.frames[3].score).toEqual(33);
      });
    });
  });

  describe("#total", function () {
    beforeEach(function () {
      score.record(5);
      score.record(2);

      score.record(8);
      score.record(2);
    });

    it("returns the player's current score", function () {
      expect(score.total()).toEqual(17);
    });

    describe("After a Spare", function () {
      it("returns the correct score", function () {
        score.record(3);
        score.record(6);
        expect(score.total()).toEqual(28);
      });
    });

    describe("After a Strike", function () {
      it("returns the correct score", function () {
        score.record(10);
        score.record(2);
        score.record(2);
        expect(score.total()).toEqual(47);
      });
    });
  });
});
