describe('Bowlingcard', function() {
  var bowlingcard;
  beforeEach(function() {
    bowlingcard = new Bowlingcard();
  });

  describe('.score', function() {
    it('starts game at 0', function() {
      expect(bowlingcard.score).toBe(0);
    });
  });

  describe('.enterScore', function() {
    it('records the users score', function() {
      bowlingcard.enterScore(5);
      expect(bowlingcard.score).toBe(5);
    });
    it('records the users scores as they accumulate', function() {
      bowlingcard.enterScore(5);
      bowlingcard.enterScore(10);
      expect(bowlingcard.score).toBe(15);
    });
    it('increase the count of rolls after user entes score for a roll', function() {
      bowlingcard.enterScore(5);
      bowlingcard.enterScore(10);
      expect(bowlingcard.roll).toBe(2);
    });
    
  });

  describe('.roll', function() {
    it('starts game at 0', function() {
      expect(bowlingcard.roll).toBe(0);
    })
  })

  describe('.frame', function() {
    it('starts game at 0', function() {
      expect(bowlingcard.frame).toBe(0);
    });
    it('increases by one every 2 rolls', function() {
      bowlingcard.enterScore(5);
      bowlingcard.enterScore(8);
      bowlingcard.enterScore(5);
      bowlingcard.enterScore(8);
      bowlingcard.frameCount();
      expect(bowlingcard.frame).toBe(2)
    })
  })
});