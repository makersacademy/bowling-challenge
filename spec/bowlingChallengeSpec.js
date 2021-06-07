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

    it("saves a spare", function() {
      bowlingScore.roll(3);
      bowlingScore.roll(7);
      bowlingScore.roll(1);
      for(i = 1; i <= 17; i++) {
        bowlingScore.roll(0);
      }
      expect(bowlingScore.totalScore()).toEqual(12);
    })

    it("saves a perfect game", function() {
      for(i = 1; i <= 12; i++) {
        bowlingScore.roll(10);
      }
      expect(bowlingScore.totalScore()).toEqual(300)
    })

    it("returns score for example game correctly", function() {
      bowlingScore.roll(1);
      bowlingScore.roll(4);
      bowlingScore.roll(4);
      bowlingScore.roll(5);
      bowlingScore.roll(6);
      bowlingScore.roll(4);
      bowlingScore.roll(5);
      bowlingScore.roll(5);
      bowlingScore.roll(10);
      bowlingScore.roll(0);
      bowlingScore.roll(1);
      bowlingScore.roll(7);
      bowlingScore.roll(3);
      bowlingScore.roll(6);
      bowlingScore.roll(4);
      bowlingScore.roll(10);
      bowlingScore.roll(2);
      bowlingScore.roll(8);
      bowlingScore.roll(6);
      expect(bowlingScore.totalScore()).toEqual(133)
    })
  });
})