describe('ScoreCard', function() {
  var scoreCard;

  beforeEach(function(){
    scoreCard = new ScoreCard();
  });

  describe('default roll value', function() {
    it('initializes each roll to default to zero before each throw', function() {
      expect(scoreCard.roll).toEqual(0);
    });
  });

  describe('record first roll', function() {
    it('adds first roll to first frame', function() {
      expect(scoreCard.roll).toEqual(0);
      scoreCard.frameOne();
      expect(scoreCard.roll).toEqual(1);
      console.log(scoreCard.roll)
    });
  });



});
