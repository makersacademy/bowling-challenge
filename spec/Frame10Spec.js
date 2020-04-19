describe("Frame10", () => {
  var frame;
  beforeEach(function () {
    frame = new Frame10();
  });
  describe("isComplete", () => {
    it("should default to false", () => {
      expect(frame.isComplete()).toBe(false);
    });
    it("should return true if no strike or spare", () => {
      frame.roll1 = 1;
      frame.roll2 = 1;
      expect(frame.isComplete()).toBe(true);
    });

    it("should return false if the first two rolls are a spare (still bonus roll to go)", () => {
      frame.roll1 = 5;
      frame.roll2 = 5;
      expect(frame.isComplete()).toBe(false);
    });

    it("should return true after the third roll after a spare", () => {
      frame.roll1 = 5;
      frame.roll2 = 5;
      frame.roll3 = 5;
      expect(frame.isComplete()).toBe(true);
    });

    it("should return true after strike and non strike roll", () => {
      frame.roll1 = 10;
      frame.roll2 = 1;
      expect(frame.isComplete()).toBe(true);
    });

    it("should return false after 2 strikes (still bonus roll to go)", () => {
      frame.roll1 = 10;
      frame.roll2 = 10;
      expect(frame.isComplete()).toBe(false);
    });

    it("should return true after 2 strikes and then any roll", () => {
      frame.roll1 = 10;
      frame.roll2 = 10;
      frame.roll3 = 4;
      expect(frame.isComplete()).toBe(true);
    });
  });
});
