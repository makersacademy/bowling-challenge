describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(1);
  });

  it("should have an index", function() {
    expect(frame.index).toEqual(1);
  });

  describe("first roll", function() {
    it("should return score", function() {
      frame.first = 5;
      expect(frame.first).toEqual(5);
    });
  });
});
