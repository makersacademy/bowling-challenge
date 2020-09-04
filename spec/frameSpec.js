describe("Frame", () => {
  var frame;
  beforeEach(() => {
    frame = new Frame();
  });

  describe("roll", () => {
    it("Adds the score for the first roll", () => {
      frame.roll(5);
      expect(frame.firstTurn).toEqual(5);
    });

    it("Adds the score for the second roll", () => {
      frame.roll(0);
      frame.roll(6);
      expect(frame.secondTurn).toEqual(6);
    });
  });
});
