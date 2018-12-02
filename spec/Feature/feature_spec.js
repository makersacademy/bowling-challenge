describe('Feature Tests', function() {

  var score;

  beforeEach(function() {
    score = new Score();


  });
  describe('Correctly calculates a full games scores', function() {
    it('advanced game with spares', function() {
      score.createsFrames()
      score.scoresIntoFrames(1, 1, 1);
      score.scoresIntoFrames(1, 2, 9);
      score.scoresIntoFrames(2, 1, 4);
      score.scoresIntoFrames(2, 2, 5);
      score.scoresIntoFrames(3, 1, 2);
      score.scoresIntoFrames(3, 2, 6);
      score.scoresIntoFrames(4, 1, 7);
      score.scoresIntoFrames(4, 2, 2);
      score.scoresIntoFrames(5, 1, 4);
      score.scoresIntoFrames(5, 2, 5);
      score.scoresIntoFrames(6, 1, 5);
      score.scoresIntoFrames(6, 2, 4);
      score.scoresIntoFrames(7, 1, 8);
      score.scoresIntoFrames(7, 2, 2);
      score.scoresIntoFrames(8, 1, 2);
      score.scoresIntoFrames(8, 2, 5);
      score.scoresIntoFrames(9, 1, 3);
      score.scoresIntoFrames(9, 2, 6);
      score.scoresIntoFrames(10, 1, 7);
      score.scoresIntoFrames(10, 2, 2);
      score.gameScoring()
      expect(score.result).toEqual(95)
    });

    it('more advanced game with strikes and spares', function() {
      score.createsFrames()
      score.scoresIntoFrames(1, 1, 10);
      score.scoresIntoFrames(1, 2, 0);
      score.scoresIntoFrames(2, 1, 3);
      score.scoresIntoFrames(2, 2, 3);
      score.scoresIntoFrames(3, 1, 3);
      score.scoresIntoFrames(3, 2, 4);
      score.scoresIntoFrames(4, 1, 3);
      score.scoresIntoFrames(4, 2, 2);
      score.scoresIntoFrames(5, 1, 4);
      score.scoresIntoFrames(5, 2, 6);
      score.scoresIntoFrames(6, 1, 9);
      score.scoresIntoFrames(6, 2, 1);
      score.scoresIntoFrames(7, 1, 10);
      score.scoresIntoFrames(7, 2, 0);
      score.scoresIntoFrames(8, 1, 6);
      score.scoresIntoFrames(8, 2, 3);
      score.scoresIntoFrames(9, 1, 2);
      score.scoresIntoFrames(9, 2, 6);
      score.scoresIntoFrames(10, 1, 4);
      score.scoresIntoFrames(10, 2, 5);
      score.gameScoring()
      expect(score.result).toEqual(118)
    });

    it('scores a spare in the final frame - 1', function() {
      score.createsFrames()
      score.scoresIntoFrames(1, 1, 10);
      score.scoresIntoFrames(2, 1, 10);
      score.scoresIntoFrames(3, 1, 10);
      score.scoresIntoFrames(4, 1, 10);
      score.scoresIntoFrames(5, 1, 10);
      score.scoresIntoFrames(6, 1, 10);
      score.scoresIntoFrames(7, 1, 10);
      score.scoresIntoFrames(8, 1, 10);
      score.scoresIntoFrames(9, 1, 10);
      score.scoresIntoFrames(10, 1, 9);
      score.scoresIntoFrames(10, 2, 1);
      score.scoresIntoFrames(10, 3, 1);
      score.gameScoring()
      expect(score.result).toEqual(270)
    });

    it('scores a spare in the final frame - 2', function() {
      score.createsFrames()
      score.scoresIntoFrames(1, 1, 10);
      score.scoresIntoFrames(2, 1, 10);
      score.scoresIntoFrames(3, 1, 10);
      score.scoresIntoFrames(4, 1, 10);
      score.scoresIntoFrames(5, 1, 10);
      score.scoresIntoFrames(6, 1, 10);
      score.scoresIntoFrames(7, 1, 10);
      score.scoresIntoFrames(8, 1, 10);
      score.scoresIntoFrames(9, 1, 10);
      score.scoresIntoFrames(10, 1, 9);
      score.scoresIntoFrames(10, 2, 1);
      score.scoresIntoFrames(10, 3, 2);
      score.gameScoring()
      expect(score.result).toEqual(271)

    });
    it('scores a spare in the final frame', function() {
      score.createsFrames()
      score.scoresIntoFrames(1, 1, 10);
      score.scoresIntoFrames(2, 1, 10);
      score.scoresIntoFrames(3, 1, 10);
      score.scoresIntoFrames(4, 1, 10);
      score.scoresIntoFrames(5, 1, 10);
      score.scoresIntoFrames(6, 1, 10);
      score.scoresIntoFrames(7, 1, 10);
      score.scoresIntoFrames(8, 1, 10);
      score.scoresIntoFrames(9, 1, 10);
      score.scoresIntoFrames(10, 1, 9);
      score.scoresIntoFrames(10, 2, 1);
      score.scoresIntoFrames(10, 3, 3);
      score.gameScoring()
      expect(score.result).toEqual(272)
    });


    it('scores a perfect 300', function() {
      score.createsFrames()
      score.scoresIntoFrames(1, 1, 10);
      score.scoresIntoFrames(2, 1, 10);
      score.scoresIntoFrames(3, 1, 10);
      score.scoresIntoFrames(4, 1, 10);
      score.scoresIntoFrames(5, 1, 10);
      score.scoresIntoFrames(6, 1, 10);
      score.scoresIntoFrames(7, 1, 10);
      score.scoresIntoFrames(8, 1, 10);
      score.scoresIntoFrames(9, 1, 10);
      score.scoresIntoFrames(10, 1, 10);
      score.scoresIntoFrames(10, 2, 10);
      score.scoresIntoFrames(10, 3, 10);
      score.gameScoring()
      expect(score.result).toEqual(300)
    });

    it('scores a spare in the final frame', function() {
      score.createsFrames()
      score.scoresIntoFrames(1, 1, 10);
      score.scoresIntoFrames(2, 1, 10);
      score.scoresIntoFrames(3, 1, 10);
      score.scoresIntoFrames(4, 1, 10);
      score.scoresIntoFrames(5, 1, 10);
      score.scoresIntoFrames(6, 1, 10);
      score.scoresIntoFrames(7, 1, 10);
      score.scoresIntoFrames(8, 1, 10);
      score.scoresIntoFrames(9, 1, 10);
      score.scoresIntoFrames(10, 1, 9);
      score.scoresIntoFrames(10, 2, 1);
      score.scoresIntoFrames(10, 3, 1);
      score.gameScoring()
      expect(score.result).toEqual(270)
    });
  });
});
