describe("Frame", () => {
  let frame;

  describe(".roll", () => {
    it("adds to the frames total", () => {
      frame = new Frame();
      frame.roll(5);
      expect(frame.total).toEqual(5);
    });

    it("adds to the number of rolls", () => {
      frame = new Frame();
      frame.roll(5);
      expect(frame.rolls).toEqual(1);
    });
  });

  describe(".isStrike", () => {
    it("knows if a strike was rolled", () => {
      frame = new Frame();
      frame.roll(10);
      expect(frame.isStrike()).toEqual(true);
    });
  });
});
