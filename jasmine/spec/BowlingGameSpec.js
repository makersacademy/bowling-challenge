describe("BowlingGame", function() {
  var bowlingGame

  beforeEach(function() {
    bowlingGame = new BowlingGame()
  });

  function gameGenerator(frame, lastFrame) {
    for(i = 0; i < 9; i++) {
      game.roll(frame);
    };
    game.roll(lastFrame || frame);
  };

  describe("totalScore", function() {

    it('calculates the score for a gutter game', function() {
    });
