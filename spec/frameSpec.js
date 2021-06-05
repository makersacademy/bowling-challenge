describe("Frame", () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  describe(".roll", () => {
    it("adds to the frames total", () => {
      frame.roll(5);
      expect(frame.total).toEqual(5);
    });

    it("adds to the number of rolls", () => {
      frame.roll(5);
      expect(frame.rolls).toEqual(1);
    });
  });

  describe(".isStrike", () => {
    it("knows if a strike was rolled", () => {
      frame.roll(10);
      expect(frame.isStrike()).toEqual(true);
    });
  });
});
