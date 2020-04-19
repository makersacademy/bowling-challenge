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
    it('increase the count of rolls after user enters score for a roll', function() {
      bowlingcard.enterScore(5);
      bowlingcard.enterScore(10);
      expect(bowlingcard.roll).toBe(2);
    });
    it('stores the number entered by the user in its corresponding roll', function() {
      bowlingcard.enterScore(5);
      bowlingcard.enterScore(10);
      expect(bowlingcard.rollScores).toEqual([5, 10]);
    })   
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
  });

  describe('.frameNumber', function() {
    it('increases frame by 1 every 2 rolls', function() {
      bowlingcard.enterScore(5);
      bowlingcard.enterScore(8);
      bowlingcard.enterScore(5);
      bowlingcard.enterScore(8);
      bowlingcard.frameNumber();
      expect(bowlingcard.frame).toBe(2);
    })
  })

  describe('.gameFrame', function() {
    it('adds a frame to the list of frames every 2 rolls', function() {
      bowlingcard.frame = 2;
      bowlingcard.gameFrame();
      expect(bowlingcard.inGameFrames).toEqual([1, 2]);
    })
  })

  describe('.framePoints', function() {
    it('adds the points scored in a frame', function() {
      expect(bowlingcard.framePoints(5, 8)).toBe(13);
    })
  })
  
  describe('.strike', function() {
    it('records a value or 0 for the second roll if the first roll was a strike', function () {
      bowlingcard.enterScore(10);
      bowlingcard.strike()
      expect(bowlingcard.rollScores[1]).toBe(0);
    })
  })

})