describe('ScoreCard', function() {

  beforeEach(function() {
    scoreCard = new ScoreCard;
  });

  describe('initialized settings', function () {

    it ('array of bowls contains nothing', function() {
      expect(scoreCard._bowls).toEqual([]);
    });

  });

  describe('entering the knocked down pins', function () {

    it ('recorded in the bowls array', function () {
      scoreCard.bowl(5);
      expect(scoreCard._bowls).toEqual([5]);
    });
  });

  describe('scoring system', function () {
    it ('adds up the bowls in a frame', function () {
      scoreCard.bowl(5);
      scoreCard.bowl(5);
      scoreCard.score();
      expect(scoreCard._score).toEqual(10);
    });

    it ('loops through the frames of a game adding the scores', function () {
      scoreCard.bowl(1);
      scoreCard.bowl(2);
      scoreCard.bowl(3);
      scoreCard.bowl(4);
      scoreCard.score();
      expect(scoreCard._score).toEqual(10);
      expect(scoreCard._frame).toEqual(11); // breaks loop if frame is higher than 10
    });

  });

});
