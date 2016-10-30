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


  });

});
