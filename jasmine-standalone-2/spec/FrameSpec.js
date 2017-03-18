describe ("Frame", function() {
  var frame = new Frame();

  it("starts on roll 1", function() {
    expect(frame.roll).toEqual(1);
  });

  it("starts with a score of 0", function() {
    expect(frame.score).toEqual(0);
  });

  describe("tracks roll", function() {
    it("can move to next roll", function() {
      frame.nextRoll();
      expect(frame.roll).toEqual(2);
    });
  });

  describe("adding points", function() {
    it("adds points when the user inputs pins they knocked down", function() {
      frame.addPoints(5);
      expect(frame.score).toEqual(5);
    });
  });


});
