describe("Frame", function() {
  var frame;

  describe(".result", function() {
    it("returns strike if first roll is 10", function() {
      frame = new Frame(10, 0);
      expect(frame.result()).toEqual("strike");
    });

    it("returns spare if not a strike but total score is 10", function() {
      frame = new Frame(3, 7);
      expect(frame.result()).toEqual("spare");
    });
  });
});
