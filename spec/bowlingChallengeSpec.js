describe("BowlingScore", function() {
  let bowlingScore;

  beforeEach(() => {
    bowlingScore = new BowlingScore();
  })

  describe("roll", function() {
    it("saves a gutter game", function() {
      for(i = 1; i <= 20; i++) {
        bowlingScore.roll(0);
      }
      expect(bowlingScore.totalScore()).toEqual(0);
    });
  });
})