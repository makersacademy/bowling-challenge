describe("Frame", function () {
  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  describe("Attributes", function () {
    it("has ball1", function () {
      expect(frame.ball1).toEqual(0);
    });

    it("has ball2", function () {
      expect(frame.ball2).toEqual(0);
    });

    it("has numberOfRolls", function () {
      expect(frame.numberOfRolls).toEqual(0);
    });

    it("has a score", function () {
      expect(frame.score).toEqual(0);
    });

    it("tracks if the frame was a spare", function () {
      expect(frame.spare).toBeFalsy();
    });

    it("tracks if the frame was a strike", function () {
      expect(frame.strike).toBeFalsy();
    });
  });
});
