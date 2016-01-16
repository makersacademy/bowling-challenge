describe("Score", function() {
  var score;

  beforeEach(function() {
    score = new Score();
  });

  xdescribe("returning the score", function() {
    it("returns an array of scores", function() {
      expect(score.giveScore([[1, 2]])).toEqual([3]);
    });

    it("returns the running totals for each round", function() {
      expect(score.giveScore([[1, 2], [5, 3], [6, 3], [1, 1]])).toEqual([3, 11, 20, 22]);
    });
  });

  describe("there is a spare(s) in the game", function() {
    it("calculates the bonus correctly", function() {
      score.giveScore([[7, 3], [2, 6], [0, 0], [9, 1], [0, 5], [3, 3], [4, 6], [1, 0], [2, 7], [8, 1]]);
      expect(score.scores.pop()).toEqual(71);
    });
  });

  describe("there is a strike(s) in the game", function() {
    it("calculates the bonus correctly", function() {
      score.giveScore([[7, 3], [2, 6], [10, 0], [3, 1], [0, 10], [3, 3], [4, 2], [1, 0], [2, 7], [8, 1]]);
      expect(score.scores.pop()).toEqual(82);
    });
  });
});
