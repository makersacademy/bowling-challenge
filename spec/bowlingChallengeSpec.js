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

    it("saves a strike", function() {
      bowlingScore.roll(10);
      bowlingScore.roll(5);
      bowlingScore.roll(3);
      for(i = 1; i <= 16; i++) {
        bowlingScore.roll(0);
      }
      expect(bowlingScore.totalScore()).toEqual(26);
    })
  });
})