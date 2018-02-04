describe('Frame',function() {
  var frame

  beforeEach(function() {
    frame = new Frame();
  });

  describe('addRoll', function(){
    it('sets firstRoll to equal amount of pins knocked down',function(){
      frame.addRoll(4)
      expect(frame.rolls[0]).toEqual(4)
    })
    it('sets secondRoll to equal amount of pins knocked down',function(){
      frame.addRoll(6)
      frame.addRoll(6)
      expect(frame.rolls[1]).toEqual(6)
    })
  })
  describe('isStrike',function(){
    it('returns true if firstRoll is equal to 10',function(){
      frame.addRoll(MAX_SCORE)
      expect(frame.isStrike()).toEqual(true)
    })
    it('returns false if firstRoll is not equal to 10', function(){
      frame.addRoll(5)
      expect(frame.isStrike()).toEqual(false)
    })
  })
  describe('isSpare',function(){
    it('returns true if firstRoll and secondRoll total is equal to 10',function(){
      frame.addRoll(5)
      frame.addRoll(5)
      expect(frame.isSpare()).toEqual(true)
    })
    it('returns false if max score achieved with one roll',function(){
      frame.addRoll(10)
      expect(frame.isSpare()).toEqual(false)
    })
    it('returns false if firstRoll and secondRoll total are not equal to 10',function(){
      frame.addRoll(4)
      frame.addRoll(5)
      expect(frame.isSpare()).toEqual(false)
    })
  })
  describe('frameScore', function(){
    it('returns total of two rolls', function(){
      frame.addRoll(4)
      frame.addRoll(5)
      expect(frame.score()).toEqual(9)
    })
  })
});
