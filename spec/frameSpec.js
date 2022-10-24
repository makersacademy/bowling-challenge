describe("Frame", () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  describe(".roll", () => {
    it("adds to the frames total", () => {
      frame.roll(5);
      expect(frame.scoreRolls()).toEqual(5);
    });

    it("adds to the number of rolls", () => {
      frame.roll(5);
      expect(frame.rolls[0]).toEqual(5);
    });
  });

  describe(".isStrike", () => {
    it("returns true when the frame is a strike", () => {
      frame.roll(10);
      expect(frame.isStrike()).toEqual(true);
    });
    it("returns false when the frame is not a strike", () => {
      frame.roll(6);
      frame.roll(4);
      expect(frame.isStrike()).toEqual(false);
    });
  });

  describe(".isSpare", () => {
    it("returns true when the frame is a spare", () => {
      frame.roll(5);
      frame.roll(5);
      expect(frame.isSpare()).toEqual(true);
    });
    it("returns false when the frame is not a spare", () => {
      frame.roll(5);
      frame.roll(4);
      expect(frame.isSpare()).toEqual(false);
    });
  });

  describe(".total", () => {
    it("returns the total score for the frame", () => {
      frame.roll(5);
      frame.roll(4);
      expect(frame.total).toEqual(9);
    });
  });

  describe(".addBonus", () => {
    it("adds a given amount to the total", () => {
      frame.roll(10);
      frame.addBonus(10);
      expect(frame.total).toEqual(20);
    });
  });
});
