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
    
    it('increase the count of rolls after user enters score for a roll', function() {
      bowlingcard.enterScore(5);
      bowlingcard.enterScore(10);
      expect(bowlingcard.roll).toBe(2);
    });
   
    it('stores the users score in its corresponding roll', function() {
      bowlingcard.enterScore(5);
      bowlingcard.enterScore(10);
      expect(bowlingcard.rollScores).toEqual([5, 10]);
    })   
  });

  describe('.roll', function() {
    it('starts game at 0', function() {
      expect(bowlingcard.roll).toBe(0);
    })
    it('records the users scores as they accumulate', function() {
      bowlingcard.enterScore(5);
      bowlingcard.enterScore(10);
      expect(bowlingcard.score).toBe(15);
    });
  })

  describe('.strike', function() {
    it('records a value or 0 for the following roll if the preceding roll was a strike', function () {
      bowlingcard.enterScore(10);
      bowlingcard.isStrike()
      expect(bowlingcard.rollScores[1]).toEqual(0);
    })
  })
    it('checks if the user rolled a strike when the user enters their score', function() {
      bowlingcard.enterScore(10);
      expect(bowlingcard.rollScores[1]).toEqual(0);
  })
  it('is triggered only if the roll that scored 10 was an odd roll', function() {
    bowlingcard.enterScore(3);
    bowlingcard.enterScore(10);
    bowlingcard.enterScore(3);
    expect(bowlingcard.rollScores[2]).toEqual(3);
  })

  describe('.strikeScore', function() {
    it('checks if current roll is odd and preceding roll was strike if so adds points to strike', function() {
      bowlingcard.enterScore(10);
      bowlingcard.enterScore(6);
      expect(bowlingcard.rollScores[0]).toEqual(16);
    })
  })
    it('checks if current roll is odd and last 2 rolls were strikes if so, adds points to strike', function() {
      bowlingcard.enterScore(10);
      bowlingcard.enterScore(10);
      bowlingcard.enterScore(3);
      expect(bowlingcard.rollScores[2]).toEqual(13);
      expect(bowlingcard.rollScores[0]).toEqual(23);
  })
    it('checks for a strike and adds points if needed', function() {
      bowlingcard.enterScore(10);
      bowlingcard.enterScore(6);
      bowlingcard.enterScore(3);
      expect(bowlingcard.rollScores[0]).toEqual(19);
  })
    it('adds points to strikes when the user had 3 strikes in a row', function() {
      bowlingcard.enterScore(10);
      bowlingcard.enterScore(10);
      bowlingcard.enterScore(10);
      expect(bowlingcard.rollScores[0]).toEqual(30);
      expect(bowlingcard.rollScores[2]).toEqual(20);
  })

  describe('.sparekeScore', function() {
    it('checks if current roll is odd and preceding frame had a spare if so adds points there too', function() {
      bowlingcard.enterScore(0);
      bowlingcard.enterScore(10);
      bowlingcard.enterScore(3);
      expect(bowlingcard.rollScores[1]).toEqual(13);
    })
    it('checks if current roll a strike and preceding frame had a spare if so adds points there automatically', function() {
      bowlingcard.enterScore(0);
      bowlingcard.enterScore(10);
      bowlingcard.enterScore(10);
      expect(bowlingcard.rollScores[1]).toEqual(20);
    })
  })
  describe('.frameArrayAdd', function() {
    it('checks if current roll is odd, if so pushes score to frame Array', function() {
      bowlingcard.enterScore(3);
      bowlingcard.frameArrayAdd()
      expect(bowlingcard.frameArray[0]).toEqual(3);
    })
    it('checks if current roll is even, if so adds to last index in frameArray', function() {
      bowlingcard.enterScore(3);
      bowlingcard.enterScore(3);
      expect(bowlingcard.frameArray[0]).toEqual(6);
    })
  })

})
    
