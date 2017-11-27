describe("Scorecard", function() {
  var scorecard = new Scorecard();

  describe("frameResults", function() {
    it("Should be set to an empty array by default", function() {
      expect(scorecard.frameResults).toEqual([])
    });
  });
});
