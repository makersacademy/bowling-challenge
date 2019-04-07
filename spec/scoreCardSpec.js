describe("ScoreCard", function() {
  var scoreCard;

  beforeEach(function() {
    scoreCard = new ScoreCard();
  });

  it("can create a scoreCard", function() {
    expect(scoreCard.seeRolls()).toEqual([]);
  });

  it("can add a pair of rolls", function() {
    scoreCard.addFrameRolls([0, 0]);
    expect(scoreCard.seeRolls()).toEqual([[0, 0]]);
  });

  describe("illegal moves", function() {
    it("rollsSheet only accepts 10 frames", function() {
      for (let i = 0; i < 10; i++) {
        scoreCard.addFrameRolls([0, 0]);
      }
      expect(function() {
        scoreCard.addFrameRolls([0, 0]);
      }).toThrowError("Illegal move");
    });
  });

  describe("gutter game", function() {
    it("returns total score of 0 after 10 frame", function() {
      for (let i = 0; i < 10; i++) {
        scoreCard.addFrameRolls([0, 0]);
      }
      expect(scoreCard.totalScore()).toEqual(0);
    });
  });

  describe("Normal game: no strikes, no spares", function() {
    it("Score card accepts 20 rolls and returns a total", function() {
      for (let i = 0; i < 10; i++) {
        scoreCard.addFrameRolls([2, 7]);
      }

      let total = (2 + 7) * 10;
      expect(scoreCard.totalScore()).toEqual(total);
    });
  });
});
