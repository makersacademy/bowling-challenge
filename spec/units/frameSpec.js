describe("frame.js", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe(".enterScore", function() {
    it("saves the scores in an Object", function() {
      frame.enterScore(3);
      frame.enterScore(5);
      expect(frame.scores.first_roll).toEqual(3);
      expect(frame.scores.second_roll).toEqual(5);
    });
  });
});
