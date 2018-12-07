'user strict'

describe('ScoreCalculator', function() {
  var scoreCalculator;

  beforeEach(function(){
    scoreCalculator = new ScoreCalculator();
  });

  describe('sumRoundScore', function(){
    it('returns the sum a frames scores', function() {
      expect(scoreCalculator.sumRoundScore([3,5])).toEqual(8);
    })
  })

  describe('totalScore', function() {
    it('returns the total score for the match if there are no spares or strikes')
  })

})
