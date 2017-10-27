describe('game', function() {

});

  var testGame;
  var sumOfFrameScores;

  beforeEach(function() {
    testGame = new game();
    sumOfFrameScores = 60;
  });

  describe('Game Score', function() {
    expect(testGame.gameScore(sumOfFrameScores)).toEqual(60);
  });
