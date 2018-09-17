describe('ScoreCard', function() {

  beforeEach(function() {
    scoreCard = new ScoreCard;
  });

  describe('initialized settings', function () {

    it ('array of bowls contains nothing', function() {
      expect(scoreCard._bowls).toEqual([]);
    });

    it ('bowl index number is 0', function() {
      expect(scoreCard._bowlIndex).toEqual(0);
    });

    it ('frame number starts with 1', function() {
      expect(scoreCard._frame).toEqual(1);
    });

    it ('score starts at 0', function() {
      expect(scoreCard.score).toEqual(0);
    });

  });

  describe('entering the knocked down pins', function () {

    it ('recorded in the bowls array', function () {
      scoreCard.bowl(5);
      expect(scoreCard._bowls).toEqual([5]);
    });

    it ('recorded more than one bowl in bowls array', function () {
      scoreCard.bowl(5);
      scoreCard.bowl(3);
      expect(scoreCard._bowls).toEqual([5,3]);
    });
  });

  describe('scoring system', function () {
    it ('adds up the bowls in a frame', function () {
      scoreCard.bowl(5);
      scoreCard.bowl(5);
      expect(scoreCard.score).toEqual(10);
    });

    describe('normal game', function () {

      it ('loops through the frames of a game adding the scores', function () {
        scoreCard._bowls = [1, 2, 3, 4];
        scoreCard.scoreCalculate();
        expect(scoreCard.score).toEqual(10);
        expect(scoreCard._frame).toEqual(11); // breaks loop if frame is higher than 10 (end of game)
      });

      it ('full game with no strikes or spares scored correctly', function () {
        scoreCard._bowls = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
        scoreCard.scoreCalculate();
        expect(scoreCard.score).toEqual(80);
      });

      it ('full game, all spares scored correctly', function () {
        scoreCard._bowls = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
        scoreCard.scoreCalculate();
        expect(scoreCard.score).toEqual(150);
      });

      it ('mixed game (no strikes or spares) scored correctly', function () {
        scoreCard._bowls = [1, 1, 5, 5, 1, 1, 1, 1, 5, 5, 1, 1, 5, 5, 1, 1, 5, 5, 1, 1];
        scoreCard.scoreCalculate();
        expect(scoreCard.score).toEqual(56);
      });

      it ('game of strikes scores correctly', function () {
        scoreCard._bowls = [10, 10, 10 ,10 ,10 ,10 ,10, 10 ,10 ,10 ,10 ,10];
        scoreCard.scoreCalculate();
        expect(scoreCard.score).toEqual(300);
      });
    });

  });

});
