describe('Feature Tests', function() {

  var score;

  beforeEach(function() {
    score = new Score();


  });
  describe('Correctly calculates a full games score', function() {
    it('basic = 85', function() {
      score.scoresIntoFrames(1, 1, 9);
      score.scoresIntoFrames(1, 2, 0);
      score.scoresIntoFrames(2, 1, 4);
      score.scoresIntoFrames(2, 2, 5);
      score.scoresIntoFrames(3, 1, 3);
      score.scoresIntoFrames(3, 2, 6);
      score.scoresIntoFrames(4, 1, 7); 
      score.scoresIntoFrames(4, 2, 2);
      score.scoresIntoFrames(5, 1, 4);
      score.scoresIntoFrames(5, 2, 5);
      score.scoresIntoFrames(6, 1, 5);
      score.scoresIntoFrames(6, 2, 4);
      score.scoresIntoFrames(7, 1, 4);
      score.scoresIntoFrames(7, 2, 3);
      score.scoresIntoFrames(8, 1, 2);
      score.scoresIntoFrames(8, 2, 5);
      score.scoresIntoFrames(9, 1, 3);
      score.scoresIntoFrames(9, 2, 5);
      score.scoresIntoFrames(10, 1, 7);
      score.scoresIntoFrames(10, 2, 2);
      score.scoreCalculation()
      expect(score.score).toEqual(85)
    });
  });
});
