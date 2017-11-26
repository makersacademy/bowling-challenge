describe('Frame', function() {
  beforeEach(function() {
    frame       = new Frame;
    firstRoll   = new Roll;
    secondRoll  = new Roll;
  })

  describe('#addToFrame', function() {
    it('adds a Roll to the Frame', function() {
      firstRoll.pinfall = 4;
      frame.addToFrame(firstRoll);
      expect(frame.rollTally[0]).toEqual(4);
    })
  })

  describe('#totalPoints', function() {
    it('keeps track of the total points', function() {
      firstRoll.pinfall = 4;
      frame.addToFrame(firstRoll);
      secondRoll.pinfall = 2;
      frame.addToFrame(secondRoll);
      expect(frame.totalPoints()).toEqual(6);
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
})
