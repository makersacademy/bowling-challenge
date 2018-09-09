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
      scoreCard.score()
      expect(scoreCard._score).toEqual(10);
    });

  });

});
