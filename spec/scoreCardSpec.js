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
      expect(scoreCard._score).toEqual(0);
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
      expect(scoreCard._score).toEqual(10);
    });

    it ('loops through the frames of a game adding the scores', function () {
      scoreCard._bowls = [1, 2, 3, 4];
      scoreCard.score();
      expect(scoreCard._score).toEqual(10);
      expect(scoreCard._frame).toEqual(11); // breaks loop if frame is higher than 10 (end of game)
    });

  });

});
