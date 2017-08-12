describe("Bonus", function() {
  var bonus;
  var frame;

  beforeEach(function() {
    frame = new Frame(1);
    bonus = new Bonus("strike", frame.frameIndex);
  });

  describe("type", function() {
    it("returns the type of the bonus", function() {
      expect(bonus.type()).toEqual("strike");
    });
  });

  describe("frame to apply to", function() {
    it("knows the frame number that the bonus is calculated from", function() {
      expect(bonus.getFrameIndex()).toEqual(1);
    });
  });
});
