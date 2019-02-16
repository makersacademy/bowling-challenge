describe('ScoreCard', function() {

  var scoreCard;

  beforeEach(function() {
    scoreCard = new ScoreCard();
  });

  describe('#sum', function() {

    it('can sum two numbers in an array', function() {
      expect(scoreCard.sum([1, 2])).toEqual(3)
    })

    it('can sum three numbers in an array', function() {
      expect(scoreCard.sum([1, 2, 3])).toEqual(6)
    })

  });

  describe('#allFrames', function() {

    it('returns all the frames of the game', function() {
      expect(scoreCard.allFrames()).toEqual(scoreCard._game.frames)
    });

  });

  describe('#pushAllElements', function(array1, array2) {

    it('cycles through array2\'s elements and pushes them to array1', function() {
      var newArray = scoreCard.pushAllElements([0, 1, 2, 3, 4], [5, 6, 7, 8, 9])
      var expectation = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      expect(newArray).toEqual(expectation)
    });

  });

});
