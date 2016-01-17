describe("Score", function() {
  var score;

  beforeEach(function() {
    score = new Score();
  });

  describe("returning the score", function() {
    it("returns the running totals for each round", function() {
      expect(score.giveScore([[1, 2], [5, 3], [6, 3], [1, 1]])).toEqual([3, 11, 20, 22]);
    });
  });

  describe("there is a spare(s) in the game", function() {
    it("calculates the bonus correctly", function() {
      score.giveScore([[7, 3], [2, 6], [0, 0], [9, 1], [0, 5], [3, 3], [4, 6], [1, 0], [2, 7], [8, 1]]);
      expect(score.scores.pop()).toEqual(71);
    });

    it("deals with multiple spares", function() {
      score.giveScore([[5, 5], [5, 5], [5, 5], [5, 5], [5, 5], [5, 5], [5, 5], [5, 5], [5, 5], [5, 5, 5]]);
      expect(score.scores.pop()).toEqual(150);
    });
  });

  describe("there is a strike(s) in the game", function() {
    it("calculates the bonus correctly", function() {
      score.giveScore([[7, 3], [2, 6], [10], [3, 1], [0, 10], [3, 3], [4, 2], [1, 0], [2, 7], [8, 1]]);
      expect(score.scores.pop()).toEqual(82);
    });

    it("deals with multiple strikes", function() {
      score.giveScore([[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10]]);
      expect(score.scores.pop()).toEqual(300);
    });
  });
});
