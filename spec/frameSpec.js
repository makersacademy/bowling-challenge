describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame(1);
  })

  describe('#rollScore', function(){
    it('should return the total score for the frame including bonuses', function(){
      expect(frame.rollScore()).toEqual(1)
    })
  })

  describe('#totalScore', function(){
    it('should return the total score for the frame including bonuses', function(){
      expect(frame.totalScore()).toEqual(1)
    })
  })

  describe('#firstRoll', function(){
    it('should return the total score for the first roll', function(){
      expect(frame.firstRoll()).toEqual(1)
    })
  })

  describe('#secondRoll', function(){
    it('should return the total score for the first roll', function(){
      frame.addRoll(3)
      expect(frame.secondRoll()).toEqual(3)
    })
  })

  describe('#addRoll', function(){
    it('should add another roll to the frame', function(){
      frame.addRoll(1)
      expect(frame.totalScore()).toEqual(2)
    })
  })

  describe('#addBonus', function(){
    it('should add a bonus to the frame', function(){
      frame.addBonus(1)
      expect(frame.totalScore()).toEqual(2)
    })
  })

  describe('#isSpare', function(){
    it('should return true if the frame is a spare', function() {
      frame.addRoll(9)
      expect(frame.isSpare()).toBe(true)
    })
  })

  describe('#isStrike', function(){
    it('should return true if the frame is a strike', function() {
      frame = new Frame(10)
      expect(frame.isStrike()).toBe(true)
    })
  })

  describe('#isComplete', function(){
    it('should return true if the frame has two rolls', function() {
      frame.addRoll(5)
      expect(frame.isComplete()).toBe(true)
    })

    it('should return true if the frame is a strike', function() {
      frame = new Frame(10)
      expect(frame.isComplete()).toBe(true)
    })
  })
})
