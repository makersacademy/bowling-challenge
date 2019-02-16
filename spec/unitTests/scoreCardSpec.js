describe('ScoreCard', function() {

  var scoreCard;

  beforeEach(function() {
    scoreCard = new ScoreCard();
  });

  describe('.sum', function() {

    it('can sum two numbers in an array', function() {
      expect(scoreCard.sum([1, 2])).toEqual(3)
    })

    it('can sum three numbers in an array', function() {
      expect(scoreCard.sum([1, 2, 3])).toEqual(6)
    })

  });

});
