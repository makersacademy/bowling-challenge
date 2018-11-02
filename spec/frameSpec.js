describe("Frame", function() {
  var score;

  beforeEach(function() {
    score = new Frame(4, 2);
  });

  describe("inputScore", function() {
    it("updates the users score", function(){
      expect(score.getCurrentScore()).toBe(6)
    });
  });
});
