const BowlingScore = require('../main/bowling');

describe('BowlingScore', () => {
  it('returns perfect game when score is 300', () => {
    score_sheet = [10, '-', 10, '-', 10, '-', 10, '-', 10, '-', 10, '-', 10, '-', 10, '-', 10, '-', 10, '-', 10, 10]
    var score = new BowlingScore(score_sheet);
    expect(score.finalScore()).toEqual("Total Score: 300 (Perfect Game!)");
  });

  it('returns gutter game when score is 0', () => {
    score_sheet = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var score = new BowlingScore(score_sheet);
    expect(score.finalScore()).toEqual("Total Score: 0 (Gutter Game)");
  });

  it('returns the correct score for a game with no strikes or spares', () => {
    score_sheet = [1, 2, 3, 6, 4, 2, 0, 1, 6, 2, 3, 4, 1, 7, 8, 0, 9, 0, 1, 3]
    var score = new BowlingScore(score_sheet);
    expect(score.finalScore()).toEqual("Total Score: 63");
  });

  it('returns the correct score for a game with some strikes and spares', () => {
    score_sheet = [1, 4, 4, 5, 6, 4, 5, 5, 10, '-', 0, 1, 7, 3, 6, 4, 10, '-', 2, 8, 6]
    var score = new BowlingScore(score_sheet);
    expect(score.finalScore()).toEqual("Total Score: 133");
  });

  it('returns the correct score for a game with all spares', () => {
    score_sheet = [1, 9, 2, 8, 4, 6, 3, 7, 8, 2, 5, 5, 6, 4, 9, 1, 3, 7, 5, 5, 4]
    var score = new BowlingScore(score_sheet);
    expect(score.finalScore()).toEqual("Total Score: 149");
  });
});
