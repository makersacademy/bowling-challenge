describe('Frame', function(){
  let frame;

  beforeEach(function() {
    frame = new Frame();
  });
  
  describe('score', function() {
    it('returns the sum of rolls 1 and 2', function() {
      frame.rollOne = 5;
      frame.rollTwo = 4;
      expect(frame.score()).toEqual(9);
    });
  })

  describe('setRoll', function() {
     it('sets the first roll to specified number', function() {
       frame.setRoll(1, 10);
       expect(frame.rollOne).toEqual(10);
     });
     it('sets the second roll to specified number', function() {
      frame.setRoll(2, 5);
      expect(frame.rollTwo).toEqual(5);
    });
  })

  describe('checkStrike', function() {
    it('sets this.bonus = 2 when passed 10', function() {
      frame.checkStrike(10);
      expect(frame.bonus).toEqual(2);
    });
    it('sets this.rollTwo to 0 when passed 10', function() {
      frame.checkStrike(10);
      expect(frame.rollTwo).toEqual(0);
    });
  });

  describe('checkSpare', function() {
    it('sets this.bonus = 1 when passed a roll that completes a spare', function() {
      frame.firstRoll = 4;
      frame.checkSpare(6);
      expect(frame.bonus).toEqual(1);
    });
  });

  describe('isBonusAvailable', function() {
    it('returns true when this.bonus > 0', function() {
      frame.bonus = 1;
      expect(frame.isBonusAvailable()).toEqual(true);
    });
    it('returns false when this.bonus === 0', function() {
      frame.bonus = 0;
      expect(frame.isBonusAvailable()).toEqual(false);
    });
  });
})