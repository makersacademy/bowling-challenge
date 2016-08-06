describe('ScoreCard', function() {

  var scoreCard

  beforeEach(function() {
    scoreCard = new ScoreCard();
  });

  describe('total', function() {
    it('is zero by default', function() {
      expect(scoreCard.total).toEqual(0);
    });
  });

  describe('roll', function() {
    it('accepts an integer score', function() {
      expect(function() { scoreCard.roll("not a number"); }).toThrowError("Please enter a number between 0 and 10");
    });
    it('does not accept numbers lower than 0', function() {
      expect(function() { scoreCard.roll(-1); }).toThrowError("Please enter a number between 0 and 10");
    });
    it('does not accept numbers higher than 10', function() {
      expect(function() { scoreCard.roll(11); }).toThrowError("Please enter a number between 0 and 10");
    });
    it('adds the result to the total', function() {
      scoreCard.roll(5);
      expect(scoreCard.total).toEqual(5);
    });
  });

});
