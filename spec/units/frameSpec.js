describe("Frame", function () {
  var frame;

  beforeEach (function () {
    frame = new Frame (3, 7);
  });

  describe(".addRoll", function () {
    it("sets secondRoll to be the given roll", function () {
      frame.addRoll(6);
      expect(frame.secondRoll).toEqual(6);
    });

    it("sets the frame to be complete", function () {
      frame.addRoll(6);
      expect(frame.complete).toEqual(true);
    });
  });

  describe(".result", function () {
    it("returns strike if first roll is 10", function () {
      frame = new Frame(10, 0);
      expect(frame.result()).toEqual("strike");
    });

    it("returns spare if not a strike but total score is 10", function () {
      expect(frame.result()).toEqual("spare");
    });
  });
});
