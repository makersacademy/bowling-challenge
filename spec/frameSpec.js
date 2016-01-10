describe("Frame", function() {

  beforeEach(function() {
    frame = new Frame()
  });

  describe("Initial pins", function() {
    it("should be 10", function() {
      expect(frame.standingPins).toEqual(10);
    });
  })
})
