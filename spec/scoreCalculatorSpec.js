describe('ScoreCalculator', function(){

  var game;

  beforeEach(function(){
    game = new ScoreCalculator();
    game.allFrames = [[4,5],[5,4]];
    game2 = new ScoreCalculator();
    game2.allFrames = [[4,5],[5,4],[4,6],[3,5]];
    game3 = new ScoreCalculator();
    game3.allFrames = [[5,5],[5,4],[4,6],[3,5]];
    game4 = new ScoreCalculator();
    game4.allFrames = [[5,3],[10,0],[4,3],[3,5]];
    game5 = new ScoreCalculator();
    game5.allFrames = [[10,0],[10,0],[4,6],[3,5]];
    game6 = new ScoreCalculator();
    game6.allFrames = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    game7 = new ScoreCalculator();
    game7.allFrames = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[10,0],[1,1]];
    game8 = new ScoreCalculator();
    game8.allFrames = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[10,0],[10,1,5]];
    game9 = new ScoreCalculator();
    game9.allFrames = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[4,6,5]];
    game10 = new ScoreCalculator();
    game10.allFrames = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[10,0,5]];
    game11 = new ScoreCalculator();
    game11.allFrames = [[1,0],[4,6],[1,0],[4,6]];
    game12 = new ScoreCalculator();
    game12.allFrames = [[10,0],[4,6],[1,0],[10,0]];
    game13 = new ScoreCalculator();
    game13.allFrames = [[10,0],[4,6],[1,0],[10,0],[10,0]];
  });

  describe('#calculateBaseScore', function(){
    it('can add up the basic score of a 2, 2 roll frames', function() {
      game.prepareFrameScoring();
      game.calculateBaseScore();
      game.calculateTotalScoreFromFrames();
      expect(game.totalScore).toEqual(18);
    });
  });

  describe('#calculateSpareScore', function() {
    it('can calculate the bonus score of spares over 4 frames', function() {
      game2.prepareFrameScoring();
      game2.calculateSpareScore();
      game2.calculateTotalScoreFromFrames();
      expect(game2.totalScore).toEqual(3);
    });

    it('can calculate the bonus score of spares over 4 frames', function() {
      game3.prepareFrameScoring();
      game3.calculateSpareScore();
      game3.calculateTotalScoreFromFrames();
      expect(game3.totalScore).toEqual(8);
    });

    it('can handle scoring a spare when the next turn has not happened yet', function() {
      game11.prepareFrameScoring();
      game11.calculateSpareScore();
      game11.calculateTotalScoreFromFrames();
      expect(game11.totalScore).toEqual(1);
    });
  });

    describe('#calculateTotalScore', function(){
      it('can add up the basic and spare score of game', function() {
        game3.calculateTotalScore();
        expect(game3.totalScore).toEqual(45);
      });

      it('can add up the basic, spare and strike score of game', function() {
        game5.calculateTotalScore();
        expect(game5.totalScore).toEqual(65);
      });
    });

    describe('#calculates 10 frame game correctly - no bonus scoring for 10th frame', function(){
      it('can add up a 10th frame score with no spare or strike', function() {
        game6.calculateTotalScore();
        expect(game6.totalScore).toEqual(20);
      });
      it('can add up a 10th frame score with a strike in the 9th frame', function() {
        game7.calculateTotalScore();
        expect(game7.totalScore).toEqual(30);
      });
      it('can add up a 10th frame score with a stike in the 9th and 10th frame', function() {
        game8.calculateTotalScore();
        expect(game8.totalScore).toEqual(53);
      });
      it('can add up a 10th frame score with a spare in the 10th frame', function() {
        game9.calculateTotalScore();
        expect(game9.totalScore).toEqual(33);
      });
      it('can add up a 10th frame score with a strike in the 10th frame only', function() {
        game10.calculateTotalScore();
        expect(game10.totalScore).toEqual(33);
      });
    });

    describe('Strike scoring', function(){


      describe('#calculateDoubleStrikeScore', function() {
        it('can calculate the bonus score of spare for previous frame', function() {
          game5.prepareFrameScoring();
          game5.calculateDoubleStrikeScore();
          game5.calculateTotalScoreFromFrames();
          expect(game5.totalScore).toEqual(14);
        });
      });

      describe('#calculateSingleStrikeScore', function() {
        it('can calculate the bonus score of spare for previous frame', function() {
          game4.prepareFrameScoring();
          game4.calculateSingleStrikeScore();
          game4.calculateTotalScoreFromFrames();
          expect(game4.totalScore).toEqual(7);
        });
      });

      describe('Stike scoring with no double counting', function() {

        it('can calculate a strike score where next roll is not another strike', function() {
          game4.prepareFrameScoring();
          game4.calculateSingleStrikeScore();
          game4.calculateDoubleStrikeScore();
          game4.calculateTotalScoreFromFrames();
          expect(game4.totalScore).toEqual(7);
        });

        it('can add up the strike score when next roll is also a strike', function() {
          game5.prepareFrameScoring();
          game5.calculateSingleStrikeScore();
          game5.calculateDoubleStrikeScore();
          game5.calculateTotalScoreFromFrames();
          expect(game5.totalScore).toEqual(24);
        });

        it('can handle scoring a strike when next turn as not happened yet', function() {
          game12.prepareFrameScoring();
          game12.calculateSingleStrikeScore();
          game12.calculateDoubleStrikeScore();
          game12.calculateTotalScoreFromFrames();
          expect(game12.totalScore).toEqual(10);
        });

        it('can handle scoring a 2 * strike when turn after next not happened yet', function() {
          game13.prepareFrameScoring();
          game13.calculateSingleStrikeScore();
          game13.calculateDoubleStrikeScore();
          game13.calculateTotalScoreFromFrames();
          expect(game13.totalScore).toEqual(10);
        });
      });
    });

    describe('Scoring individual frames', function() {
      it('sets up the frame scoring data structure', function() {
        game4.prepareFrameScoring();
        expect(game4.frameScores.length).toEqual(4);
        expect(game4.frameScores[0]).toEqual(0);
        expect(game4.frameScores[1]).toEqual(0);
        expect(game4.frameScores[2]).toEqual(0);
        expect(game4.frameScores[3]).toEqual(0);
      });

      it('adds base score to correct frame', function() {
        game4.prepareFrameScoring();
        game4.calculateBaseScore();
        expect(game4.frameScores[2]).toEqual(7);
      });

      it('adds spare score to correct frame', function() {
        game3.prepareFrameScoring();
        game3.calculateSpareScore();
        expect(game3.frameScores[0]).toEqual(5);
        expect(game3.frameScores[2]).toEqual(3);
      });

      it('adds single strike score to correct frame', function() {
        game4.prepareFrameScoring();
        game4.calculateSingleStrikeScore();
        expect(game4.frameScores[1]).toEqual(7);
      });

      it('adds double strike score to correct frame', function() {
        game5.prepareFrameScoring();
        game5.calculateDoubleStrikeScore();
        expect(game5.frameScores[0]).toEqual(14);
      });

    });

});
