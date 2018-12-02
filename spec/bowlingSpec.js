describe('ScoreCard', function() {
  var scoreCard;

  beforeEach(function(){
    scoreCard = new ScoreCard();
  });

  describe('default roll value', function() {
    it('initializes each roll to default to zero before each throw', function() {
      expect(scoreCard.defaultRollValue).toEqual(0);
    });
  });

  describe('record first roll', function() {
    it('adds first roll to first frame', function() {
      expect(scoreCard.rollOne).toEqual(0);
      scoreCard.frameOne();
      expect(scoreCard.rollOne).toEqual(1);
    });
  });

  // describe('record the score of one frame', function() {
  //   it('adds roll one and roll two to the frame score array', function() {
  //     expect(scoreCard.roll).toEqual(0);
  //     scoreCard.frameOne();
  //     expect(scoreCard.roll).toEqual(1);
  //
  //   });
  // });


});
