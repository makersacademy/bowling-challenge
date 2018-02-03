describe('Frame',function() {
  var frame

  beforeEach(function() {
    frame = new Frame();
  });

  it("initally has zero for first roll",function(){
    expect(frame.firstRoll).toEqual(0)
  })

  it("initally has zero for second roll",function(){
    expect(frame.firstRoll).toEqual(0)
  })

  describe('setFirstRoll', function(){
    it('sets firstRoll to equal amount of pins knocked down',function(){
      frame.setFirstRoll(4)
      expect(frame.firstRoll).toEqual(4)
    })
  })
  describe('setSecondRoll',function(){
    it('sets secondRoll to equal amount of pins knocked down',function(){
      frame.setSecondRoll(6)
      expect(frame.secondRoll).toEqual(6)
    })
  })
  describe('isStrike',function(){
    it('returns true if firstRoll is equal to 10',function(){
      frame.setFirstRoll(MAX_SCORE)
      expect(frame.isStrike()).toEqual(true)
    })
    it('returns false if firstRoll is not equal to 10', function(){
      frame.setFirstRoll(5)
      expect(frame.isStrike()).toEqual(false)
    })
  })
  describe('isSpare',function(){
    it('returns true if firstRoll and secondRoll total is equal to 10',function(){
      frame.setFirstRoll(5)
      frame.setSecondRoll(5)
      expect(frame.isSpare()).toEqual(true)
    })
    it('returns false if max score achieved with one roll',function(){
      frame.setFirstRoll(10)
      expect(frame.isSpare()).toEqual(false)
    })
    it('returns false if firstRoll and secondRoll total are not equal to 10',function(){
      frame.setFirstRoll(4)
      frame.setSecondRoll(5)
      expect(frame.isSpare()).toEqual(false)
    })
  })
  describe('frameScore', function(){
    it('returns total of two rolls', function(){
      frame.setFirstRoll(4)
      frame.setSecondRoll(5)
      expect(frame.score()).toEqual(9)
    })
  })
});
