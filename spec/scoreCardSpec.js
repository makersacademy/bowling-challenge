describe('ScoreCard', function() {
  var scoreCard;

  beforeEach(function(){
    scoreCard = new ScoreCard();
  });

  describe('record first roll', function() {
    it('adds first roll to first frame', function() {
      scoreCard.addRoll(1);
      expect(scoreCard.rollOne).toEqual(1);
    });
  });

  describe('record second roll', function() {
    it('adds second roll to first frame', function() {
      scoreCard.addRoll(5);
      scoreCard.addRoll(3);
      expect(scoreCard.frames[0][1]).toEqual(3);
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

    it('can calculate the running total', function() {
      scoreCard.addRoll(6)
      scoreCard.addRoll(3)
      expect(scoreCard.calculateTotal()).toEqual(9)
      scoreCard.addRoll(1)
      scoreCard.addRoll(4)
      expect(scoreCard.calculateTotal()).toEqual(14)
    });
  });

  // describe('prints the score card', function() {
  //   it('prints score card for the first 2 frames', function() {
  //     scoreCard.addRoll(3)
  //     scoreCard.addRoll(6)
  //     expect(scoreCard.printScoreCard()).toEqual("Frame        1     2    3\nPins        3,1   2,8  -,-\nFrame total  4     10   -\nTotal: 14")
  //   })
  // })

});
