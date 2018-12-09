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
      scoreCard.addRoll(1);
      expect(scoreCard.rollOne).toEqual(1);
    });
  });

  describe('record second roll', function() {
    it('adds second roll to first frame', function() {
      expect(scoreCard.rollTwo).toEqual(0);
      scoreCard.addRoll(5);
      scoreCard.addRoll(3);
      expect(scoreCard.rollTwo).toEqual(3);
    });
  });

  describe('record both rolls for one frame', function() {
    it('returns the total frame score', function() {
      scoreCard.addRoll(4)
      scoreCard.addRoll(5)
      expect(scoreCard.frames).toEqual([[4, 5]])
    });
  });

  describe('calculates totals', function() {
    it('can calculate the frame total for the first frame', function() {
      scoreCard.addRoll(3)
      scoreCard.addRoll(6)
      expect(scoreCard.frameScore(1)).toEqual(9)


    });

    // it('can calculate the running total', function() {
    //
    //
    // })
  });

  // describe('prints the score card', function() {
  //   it('prints score card for the first 2 frames', function() {
  //
  //
  //   })
  // })

});
