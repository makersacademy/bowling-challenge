describe("frame.js", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe(".first_roll", function() {
    it("returns the score of the first roll", function() {
      frame.enterScore(3);
      expect(frame.scores.first_roll).toEqual(3);
    });
  });

  describe(".second_roll", function() {
    it("returns the score of the second roll", function() {
      frame.enterScore(3);
      frame.enterScore(5);
      expect(frame.scores.second_roll).toEqual(5);
    });
  });

  describe(".enterScore", function() {
    it("saves the score in a hash", function() {
      frame.enterScore(3);
      expect(frame.scores.length).toEqual(1);
    });
  });
});
