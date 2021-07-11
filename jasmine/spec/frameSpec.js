describe("Frame", function () {
  let frame;

  beforeEach(function () {
    frame = new Frame();
  });

  describe("Adding points", function () {
    it("can add two rolls of its frame", function () {
      frame.stRoll(3);
      frame.ndRoll(4);
      expect(frame.getRolls()).toEqual(7);
    });
    it("can add additional points to the total", function () {
      frame.stRoll(5);
      frame.ndRoll(5);
      expect(frame.getRolls()).toEqual(10);
      frame.addPoints(3);
      expect(frame.getTotal()).toEqual(13);
    });
  });

  describe("Determining types", function () {
    it("can determine a strike", function () {
      frame.stRoll(10);
      frame.ndRoll(0);
      expect(frame.isStrike()).toBe(true);
    });
    it("can determine a spare", function () {
      frame.stRoll(5);
      frame.ndRoll(5);
      expect(frame.isSpare()).toBe(true);
    });
    it("can tell apart a strike from a spare", function () {
      frame.stRoll(10);
      frame.ndRoll(0);
      expect(frame.isSpare()).toBe(false);
    });
  });
});
