describe("Score", function() {
  var score;

  beforeEach(function() {
    score = new Score();
  });

  describe("getScore", function() {
    it("returns the current score", function () {
      expect(score.getScore()).toBe(0)
    });
  });

  describe("inputScore", function() {
    it("updates the users score", function(){
      score.input(5)
      expect(score.getScore()).toBe(5)
    });
  });
});
