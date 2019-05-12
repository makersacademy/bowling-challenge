describe('BowlingScoreCard', function() {
  var scoreCard;

  beforeEach(function() {
    scoreCard = new BowlingScoreCard();
  });

  describe('states/properties', function() {
    it('Starts on frame 1', function() {
      expect(scoreCard.getFrame()).toEqual(1);
    });

    it('Starts with a total score of 0', function() {
      expect(scoreCard.getTotalScore()).toEqual(0);
    });
  });

  describe('enterFirstRoll, getFirstRoll', function() {
    it('can update and retrieve first roll score', function() {
      scoreCard.enterFirstRoll(1)
      expect(scoreCard.getFirstRoll()).toEqual(1);
    });
  });

  describe('enterSecondRoll, getSecondRoll', function() {
    it('can update and retrieve second roll score', function() {
      scoreCard.enterSecondRoll(8)
      expect(scoreCard.getSecondRoll()).toEqual(8);
    });
  });

  describe('nextFrame', function() {
    it('moves on to the next frame', function() {
      scoreCard.nextFrame();
      expect(scoreCard.getFrame()).toEqual(2);
    });

    it("can't go beyond 10 frames", function() {
      for(i=0; i < 10; i++) {
        scoreCard.nextFrame();
      }
      expect(scoreCard.getFrame()).toEqual(10);
    });
  });

  describe('isGameOver', function() {
    it('evaluates whether frame limit has been reached', function() {
      for(i=0; i < 9; i++) {
        scoreCard.nextFrame();
      }
      expect(scoreCard.isGameOver()).toEqual(true);
    });
  });

  describe('updateTotal', function() {
    it('sums current frame and adds to total', function() {
      scoreCard.enterFirstRoll(3)
      scoreCard.enterSecondRoll(6)
      scoreCard.updateTotalScore();
      expect(scoreCard.getTotalScore()).toEqual(9);
    });
  });

  describe('gutter game scenario', function() {
    it('roll 0, 20 times', function() {
      for(i=0; i < 9; i++) {
        scoreCard.enterFirstRoll(0);
        scoreCard.enterSecondRoll(0);
        scoreCard.updateTotalScore();
        scoreCard.nextFrame();
      }
      expect(scoreCard.getTotalScore()).toEqual(0);
      expect(scoreCard.getFrame()).toEqual(10);
      expect(scoreCard.isGameOver()).toEqual(true);
    });
  });

  describe('isStrike', function() {
    it('evaluates roll one', function() {
      scoreCard.enterFirstRoll(10)
      expect(scoreCard.isStrike(scoreCard.getFirstRoll())).toEqual(true);
    });
  });

});
