describe ("Frame", function() {

  beforeEach(function() {
    frame = new Frame();
  });

  it("starts on roll 1", function() {
    expect(frame.roll).toEqual(1);
  });

  it("starts with an empty score", function() {
    expect(frame.score).toEqual([]);
  });

  describe("tracks roll", function() {
    it("can move to next roll", function() {
      frame.nextRoll();
      expect(frame.roll).toEqual(2);
    });
  });

  describe("adds points", function() {
    it("adds points when the user inputs pins they knocked down", function() {
      frame.addPoints(5);
      frame.addPoints(2);
      expect(frame.score).toEqual([5, 2]);
    });

    it("moves to the next roll when the user inputs pins they knocked down", function() {
      frame.addPoints(5);
      expect(frame.roll).toEqual(2);
    });

  });

  describe("checks if strike or spare", function() {
    it("checks whether player got a strike", function() {
      frame.addPoints(10);
      expect(frame.strike).toEqual(true);
    });

    it("checks whether player got a strike", function() {
      frame.addPoints(5);
      frame.addPoints(5);
      expect(frame.spare).toEqual(true);
    });
  });


});
