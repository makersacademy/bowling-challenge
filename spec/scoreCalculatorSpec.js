describe('ScoreCalculator', function(){

  var scoreCalculator;

  beforeEach(function(){
    scoreCalculator = new ScoreCalculator();
    game1 = [[4,5],[5,4]];
    game2 = [[4,5],[5,4],[4,6],[3,5]];
    game3 = [[5,5],[5,4],[4,6],[3,5]];
    game4 = [[5,3],[10,0],[4,3],[3,5]];
    game5 = [[10,0],[10,0],[4,6],[3,5]];
    game6 = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    game7 = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[10,0],[1,1]];
    game8 = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[10,0],[10,1,5]];
    game9 = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[4,6,5]];
    game10 = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[10,0,5]];
    game11 = [[1,0],[4,6],[1,0],[4,6]];
    game12 = [[10,0],[4,6],[1,0],[10,0]];
    game13 = [[10,0],[4,6],[1,0],[10,0],[10,0]];
  });

  describe('#calculateBaseScore', function(){
    it('can add up the basic score of a 2, 2 roll frames', function() {
      scoreCalculator.prepareFrameScoring(game1);
      scoreCalculator.calculateBaseScore();
      scoreCalculator.calculateTotalScoreFromFrames();
      expect(scoreCalculator.totalScore).toEqual(18);
    });
  });

  describe('#calculateSpareScore', function() {
    it('can calculate the bonus score of spares over 4 frames', function() {
      scoreCalculator.prepareFrameScoring(game2);
      scoreCalculator.calculateSpareScore();
      scoreCalculator.calculateTotalScoreFromFrames();
      expect(scoreCalculator.totalScore).toEqual(3);
    });

    it('can calculate the bonus score of spares over 4 frames', function() {
      scoreCalculator.prepareFrameScoring(game3);
      scoreCalculator.calculateSpareScore();
      scoreCalculator.calculateTotalScoreFromFrames();
      expect(scoreCalculator.totalScore).toEqual(8);
    });

    it('can handle scoring a spare when the next turn has not happened yet', function() {
      scoreCalculator.prepareFrameScoring(game11);
      scoreCalculator.calculateSpareScore();
      scoreCalculator.calculateTotalScoreFromFrames();
      expect(scoreCalculator.totalScore).toEqual(1);
    });
  });

    describe('#calculateTotalScore', function(){
      it('can add up the basic and spare score of game', function() {
        scoreCalculator.calculateTotalScore(game3);
        expect(scoreCalculator.totalScore).toEqual(45);
      });

      it('can add up the basic, spare and strike score of game', function() {
        scoreCalculator.calculateTotalScore(game5);
        expect(scoreCalculator.totalScore).toEqual(65);
      });
    });

    describe('#calculates 10 frame game correctly - no bonus scoring for 10th frame', function(){
      it('can add up a 10th frame score with no spare or strike', function() {
        scoreCalculator.calculateTotalScore(game6);
        expect(scoreCalculator.totalScore).toEqual(20);
      });
      it('can add up a 10th frame score with a strike in the 9th frame', function() {
        scoreCalculator.calculateTotalScore(game7);
        expect(scoreCalculator.totalScore).toEqual(30);
      });
      it('can add up a 10th frame score with a stike in the 9th and 10th frame', function() {
        scoreCalculator.calculateTotalScore(game8);
        expect(scoreCalculator.totalScore).toEqual(53);
      });
      it('can add up a 10th frame score with a spare in the 10th frame', function() {
        scoreCalculator.calculateTotalScore(game9);
        expect(scoreCalculator.totalScore).toEqual(33);
      });
      it('can add up a 10th frame score with a strike in the 10th frame only', function() {
        scoreCalculator.calculateTotalScore(game10);
        expect(scoreCalculator.totalScore).toEqual(33);
      });
    });

    describe('Strike scoring', function(){


      describe('#calculateDoubleStrikeScore', function() {
        it('can calculate the bonus score of spare for previous frame', function() {
          scoreCalculator.prepareFrameScoring(game5);
          scoreCalculator.calculateDoubleStrikeScore();
          scoreCalculator.calculateTotalScoreFromFrames();
          expect(scoreCalculator.totalScore).toEqual(14);
        });
      });

      describe('#calculateSingleStrikeScore', function() {
        it('can calculate the bonus score of spare for previous frame', function() {
          scoreCalculator.prepareFrameScoring(game4);
          scoreCalculator.calculateSingleStrikeScore();
          scoreCalculator.calculateTotalScoreFromFrames();
          expect(scoreCalculator.totalScore).toEqual(7);
        });
      });

      describe('Stike scoring with no double counting', function() {

        it('can calculate a strike score where next roll is not another strike', function() {
          scoreCalculator.prepareFrameScoring(game4);
          scoreCalculator.calculateSingleStrikeScore();
          scoreCalculator.calculateDoubleStrikeScore();
          scoreCalculator.calculateTotalScoreFromFrames();
          expect(scoreCalculator.totalScore).toEqual(7);
        });

        it('can add up the strike score when next roll is also a strike', function() {
          scoreCalculator.prepareFrameScoring(game5);
          scoreCalculator.calculateSingleStrikeScore();
          scoreCalculator.calculateDoubleStrikeScore();
          scoreCalculator.calculateTotalScoreFromFrames();
          expect(scoreCalculator.totalScore).toEqual(24);
        });

        it('can handle scoring a strike when next turn as not happened yet', function() {
          scoreCalculator.prepareFrameScoring(game12);
          scoreCalculator.calculateSingleStrikeScore();
          scoreCalculator.calculateDoubleStrikeScore();
          scoreCalculator.calculateTotalScoreFromFrames();
          expect(scoreCalculator.totalScore).toEqual(10);
        });

        it('can handle scoring a 2 * strike when turn after next not happened yet', function() {
          scoreCalculator.prepareFrameScoring(game13);
          scoreCalculator.calculateSingleStrikeScore();
          scoreCalculator.calculateDoubleStrikeScore();
          scoreCalculator.calculateTotalScoreFromFrames();
          expect(scoreCalculator.totalScore).toEqual(10);
        });
      });
    });

    describe('Scoring individual frames', function() {
      it('sets up the frame scoring data structure', function() {
        scoreCalculator.prepareFrameScoring(game4);
        expect(scoreCalculator.frameScores.length).toEqual(4);
        expect(scoreCalculator.frameScores[0]).toEqual(0);
        expect(scoreCalculator.frameScores[1]).toEqual(0);
        expect(scoreCalculator.frameScores[2]).toEqual(0);
        expect(scoreCalculator.frameScores[3]).toEqual(0);
      });

      it('adds base score to correct frame', function() {
        scoreCalculator.prepareFrameScoring(game4);
        scoreCalculator.calculateBaseScore();
        expect(scoreCalculator.frameScores[2]).toEqual(7);
      });

      it('adds spare score to correct frame', function() {
        scoreCalculator.prepareFrameScoring(game3);
        scoreCalculator.calculateSpareScore();
        expect(scoreCalculator.frameScores[0]).toEqual(5);
        expect(scoreCalculator.frameScores[2]).toEqual(3);
      });

      it('adds single strike score to correct frame', function() {
        scoreCalculator.prepareFrameScoring(game4);
        scoreCalculator.calculateSingleStrikeScore();
        expect(scoreCalculator.frameScores[1]).toEqual(7);
      });

      it('adds double strike score to correct frame', function() {
        scoreCalculator.prepareFrameScoring(game5);
        scoreCalculator.calculateDoubleStrikeScore();
        expect(scoreCalculator.frameScores[0]).toEqual(14);
      });

    });

});
