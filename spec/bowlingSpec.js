describe('ScoreCard', function() {
  var scoreCard;

  beforeEach(function() {
    scoreCard = new ScoreCard();
  });

  describe('scoreCard', function() {
    it('displays scores as zero at the start', function() {
      expect(scoreCard.scoreTotal).toBe(0);
    });
  });

  describe('count', function() {
    it('stores the number of fallen pins in a roll', function() {
      scoreCard.roll(6);
      expect(scoreCard.rollArray[0]).toBe(6);
    });
  });

  describe('frameScores', function() {
    it('adds up the number of fallen pins in two rolls', function() {
      scoreCard.roll(6);
      scoreCard.roll(3);
      expect(scoreCard.frameScores[0]).toBe(9);
    });
  });

  describe('strike', function() {
    it('ends the frame', function() {
      scoreCard.roll(10);
      scoreCard.roll(2);
      expect(scoreCard.rollArray[1]).toBe(0);
    });
  });

  describe('strike bonus', function() {
    it('adds next two rolls as bonus points', function() {
      scoreCard.roll(10);
      scoreCard.roll(0);
      scoreCard.roll(3);
      scoreCard.roll(3);
      expect(scoreCard.frameScores[0]).toBe(16);
    });

    it('after 2 consecutive strikes, it also adds the next non-strike roll as bonus to the frame of the first strike', function() {
      scoreCard.roll(10);
      scoreCard.roll(0);
      scoreCard.roll(10);
      scoreCard.roll(0);
      scoreCard.roll(3);
      scoreCard.roll(4);
      expect(scoreCard.frameScores[0]).toBe(23);
      expect(scoreCard.frameScores[1]).toBe(17);
    });
  });

  describe('spare bonus', function() {
    it('adds next roll as bonus points', function() {
      scoreCard.roll(7);
      scoreCard.roll(3);
      scoreCard.roll(3);
      scoreCard.roll(3);
      expect(scoreCard.frameScores[0]).toBe(13);
    });
  });

  describe('scoreTotal', function() {
    it('adds up all of the frame scores', function() {
      for (var i = 0; i < 20; i++) {
        scoreCard.roll(3);
      };
      expect(scoreCard.scoreTotal).toBe(60);
    });

    it('knows how to score a perfect game', function() {
      for (var i = 0; i < 10; i++) {
        scoreCard.roll(10);
        scoreCard.roll(0);
      };
      scoreCard.roll(10);
      expect(scoreCard.scoreTotal).toBe(300);
    });
  });

  describe('tenth frame', function() {
    it('adds maximum 30 to the score', function() {
      for (var i = 0; i < 18; i++) {
        scoreCard.roll(5);
      };
      scoreCard.roll(10);
      scoreCard.roll(10);
      scoreCard.roll(10);
      expect(scoreCard.frameScores[9]).toBe(30);
    });
  });
});
