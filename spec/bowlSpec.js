describe('Game', function() {

  beforeEach(function() {
    game = new BowlingGame
    game.setup();
  });

  describe('on setup', function() {

    it('should initialise with 10 frames', function() {
      expect(game.frames.length).toEqual(10);
    });

    it('should initialise with each frame indexed from 1 to 10', function() {
      expect(game.frames[0].number).toEqual(1);
      expect(game.frames[1].number).toEqual(2);
      expect(game.frames[2].number).toEqual(3);
      expect(game.frames[3].number).toEqual(4);
      expect(game.frames[4].number).toEqual(5);
      expect(game.frames[5].number).toEqual(6);
      expect(game.frames[6].number).toEqual(7);
      expect(game.frames[7].number).toEqual(8);
      expect(game.frames[8].number).toEqual(9);
      expect(game.frames[9].number).toEqual(10);
    });

    it('should initialise with a third bonus roll in the 10th frame', function() {
      expect(game.frames[9].rollThreeScore).toBe(0);
    });

    it('should initialise with a total score of 0', function() {
      expect(game.totalScore).toEqual(0);
    });

  });

  describe('after gameplay', function() {

    beforeEach(function() {
      game.frames[1].rollOneScore = 10;
      game.frames[2].rollOneScore = 4;
      game.frames[2].rollTwoScore = 6;
      game.frames[3].rollOneScore = 7;
      game.frames[4].rollOneScore = 4;
      game.frames[5].rollOneScore = 10;
      game.frames[6].rollOneScore = 4;
      game.frames[6].rollTwoScore = 3;
      game.frames[7].rollOneScore = 7;
      game.frames[8].rollOneScore = 6;
      game.frames[8].rollTwoScore = 4;
      game.frames[9].rollOneScore = 7;
    });

    it('should calculate the bonus score of a frame by calling the calculateBonusScore() function on each frame', function() {
      game.calculateFrameBonusScores();
      expect(game.frames[1].bonusScore).toEqual(10);
      expect(game.frames[2].bonusScore).toEqual(7);
    });

    it('should calculate the bonus score of Frame #9 by calling the calculateFrameNineBonusScore() function on the frame', function() {

      game.calculateFrameBonusScores();
      expect(game.frames[8].bonusScore).toEqual(7);
    });

    it('should calculate the total score of each frame by calling the calculateTotalScore() function on each frame', function() {
      game.calculateFrameBonusScores();
      game.calculateFrameTotalScores();
      expect(game.frames[1].totalScore).toEqual(20);
      expect(game.frames[2].totalScore).toEqual(17);
      expect(game.frames[3].totalScore).toEqual(7);
      expect(game.frames[4].totalScore).toEqual(4);
    });

    it('should calculate the total score for the game', function() {
      game.calculateGameTotalScore();
      expect(game.totalScore).toEqual(103);
    });

  });

  describe('special games and scores', function() {

    it('should calculate 0 points for a game where every roll results in a score of 0', function() {
      game._rollGutterGame();
      game.calculateGameTotalScore();
      expect(game.totalScore).toEqual(0);
    });

    it('should calculate 300 points for a game where every roll results in a strike', function() {
      game._rollPerfectGame();
      game.calculateGameTotalScore();
      expect(game.totalScore).toEqual(300);
    });

  });

});
