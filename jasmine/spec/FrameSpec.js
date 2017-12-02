describe('Frame', function() {
  beforeEach(function() {
    frame       = new Frame;
    firstRoll   = new Roll;
    secondRoll  = new Roll;
  })

  describe('totalScore', function() {
    it('stores the total score for the frame', function() {
      expect(frame.totalScore).toEqual(0);
    })

    it('updates the totalScore of the frame', function() {
      firstRoll.pinfall = 5;
      frame.addToFrame(firstRoll);
      expect(frame.totalScore).toEqual(5)
    })
  })

  describe('#addToFrame', function() {
    it('adds the score of a Roll to the Frame', function() {
      firstRoll.pinfall = 4;
      frame.addToFrame(firstRoll);
      expect(frame.rollTally[0]).toEqual(4);
    })

    it('updates the totalScore of the frame', function() {
      firstRoll.pinfall = 5;
      frame.addToFrame(firstRoll);
      expect(frame.totalScore).toEqual(5)
    })
  })

  describe('#getScore', function() {
    it('keeps track of the total points', function() {
      firstRoll.pinfall = 4;
      frame.addToFrame(firstRoll);
      secondRoll.pinfall = 2;
      frame.addToFrame(secondRoll);
      expect(frame.getScore()).toEqual(6);
    })

    it('able to run even when nothing in the frame', function() {
      expect(frame.getScore()).toEqual(0);
    })

    it('also adds any bonus points', function() {
      firstRoll.pinfall = 6;
      frame.addToFrame(firstRoll);
      secondRoll.pinfall = 4;
      frame.addToFrame(secondRoll);
      frame.awardBonusPoints(5)
      expect(frame.getScore()).toEqual(15);
    })
  })

  describe('#isStrike', function() {
    it('starts as false', function() {
      expect(frame.isStrike()).toBe(false);
    })

    it('turns true when the first firstRoll has a pinfall of 10', function() {
      firstRoll.pinfall = 10;
      frame.addToFrame(firstRoll);
      expect(frame.isStrike()).toBe(true);
    })
  })

  describe('#isSpare', function() {
    it('starts as false', function() {
      expect(frame.isSpare()).toBe(false);
    })

    it('turns true when the after the second firstRolle and if the total is 10', function() {
      firstRoll.pinfall = 7;
      frame.addToFrame(firstRoll);
      secondRoll.pinfall = 3;
      frame.addToFrame(secondRoll)
      expect(frame.isSpare()).toBe(true);
    })
  })

  describe('isBonusAwarded', function() {
    describe('to keep track of strike and spare bonuses being added to a frame', function() {
      it('is initialized as false', function() {
        expect(frame.isBonusAwarded).toBe(false)
      })
    })
  })

  describe('_bonusPoints', function() {
    it('is a property of the frame to store bonus points in an Array', function() {
      expect(frame._bonusPoints).toEqual([])
    })
  })

  describe('#awardBonusPoints', function() {
    it('adds points to the _bonusPoints property', function() {
      frame.awardBonusPoints(4);
      expect(frame._bonusPoints).toEqual([4, 0])
    })

    it('can award two rolls', function() {
      frame.awardBonusPoints(4, 5);
      expect(frame._bonusPoints).toEqual([4, 5])
    })
  })
})
