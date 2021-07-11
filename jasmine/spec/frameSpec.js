describe("Frame", function () {
  let frame;

  beforeEach(function () {
    frame = new Frame();
  });

  describe("Adding points", function () {
    it("can add two rolls of its frame", function () {
      frame.stRoll(3);
      frame.ndRoll(4);
      expect(frame.getTotal()).toEqual(7);
    });
  });
});
