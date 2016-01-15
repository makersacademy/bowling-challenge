describe("Score", function() {
  var score;

  beforeEach(function() {
    score = new Score();
  });

  describe("returning the score", function() {
    it("returns an array of scores", function() {
      expect(score.giveScore([[1, 2]])).toEqual([3]);
    });

    it("returns the running totals for each round", function() {
      expect(score.giveScore([[1, 2], [5, 3], [6, 3], [1, 1]])).toEqual([3, 11, 20, 22]);
    });
  });
});
