describe('Frame', function() {
  beforeEach(function() {
    frame       = new Frame;
    firstRoll   = new Roll;
    secondRoll  = new Roll;
  })

  describe('#addToFrame', function() {
    it('adds the score of a Roll to the Frame', function() {
      firstRoll.pinfall = 4;
      frame.addToFrame(firstRoll);
      expect(frame.rollTally[0]).toEqual(firstRoll);
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
      frame.awardBonusPoint(5)
      expect(frame.getScore()).toEqual(15);
    })
  })

  describe('#isStrike', function() {
    it('not true when initialized', function() {
      expect(frame.isStrike()).not.toBe(true);
    })

    it('turns true when the first firstRoll has a pinfall of 10', function() {
      firstRoll.pinfall = 10;
      frame.addToFrame(firstRoll);
      expect(frame.isStrike()).toBe(true);
    })
  })

  describe('#isSpare', function() {
    it('not true when initialized', function() {
      expect(frame.isSpare()).not.toBe(true);
    })

    it('turns true if the score is 10 after the second Roll', function() {
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

  describe('#awardBonusPoint', function() {
    it('adds points to the _bonusPoints property', function() {
      frame.awardBonusPoint(4);
      expect(frame._bonusPoints).toEqual([4])
    })

    it('changes isBonusAwarded to true', function() {
      frame.awardBonusPoint(4);
      expect(frame.isBonusAwarded).toBe(true)
    })
  })
})
