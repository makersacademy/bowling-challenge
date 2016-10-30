describe("BowlingGame", function() {
  var bowlingGame

  beforeEach(function() {
    bowlingGame = new BowlingGame()
  });

  function gameGenerator(frame, lastFrame) {
    for(i = 0; i < 9; i++) {
      bowlingGame.saveRolls(frame);
    };
    bowlingGame.saveRolls(lastFrame || frame);
  };

  describe("totalScore", function() {

    it('calculates the score for a gutter game', function() {
      gameGenerator([0,0]);
      expect(bowlingGame.totalScore()).toBe(0)
    });

    it('calculates the score for a the perfect game', function() {
      gameGenerator([10],[10,10,10]);
      expect(bowlingGame.totalScore()).toBe(300)
    });
  });

  describe("saveRolls", function() {
    it('saves the frame to the game array',function() {
      frame = new Frame([3,4])
      expect(bowlingGame.saveRolls(frame)).toBe({rolls:[3,4]})
    });
  });
});
