describe("Frame", function () {
  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  describe("#initialise", function () {
    it("first roll score starts at 0", function () {
      expect(frame.firstRoll).toEqual(0);
    });
    it("second roll score starts at 0", function () {
      expect(frame.firstRoll).toEqual(0);
    });
  });
});
