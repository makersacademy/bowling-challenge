describe("ScoreSheet", function() {

  beforeEach(function() {
    scoresheet = new ScoreSheet();
  });

  describe("#new", function() {
    it("creates a new scoresheet object", function() {
      expect(scoresheet).toEqual(jasmine.any(ScoreSheet));
    });
    it("includes a property count",function() {
      expect(scoresheet.get_count()).toEqual(0);
    })
  });

});
