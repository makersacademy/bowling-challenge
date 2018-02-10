describe('Frame',function() {
  var frame
  var finalFrame

  beforeEach(function() {
    frame = new Frame();
    finalFrame = new Frame(true);
  });

  it('knows if it is the final frame - default set to no', function(){
    expect(frame.isFinalFrame).toEqual(false)
  })
  it('can be created as finalFrame',function(){
    expect(finalFrame.isFinalFrame).toEqual(true)
  })

  describe('isComplete when not finalFrame',function(){
    it('confirms true if roll is a strike', function(){
      frame.addRoll(MAX_SCORE)
      expect(frame.isComplete()).toEqual(true)
    })
    it('confirms true if first roll is not a strike and two rolls added', function(){
      frame.addRoll(5)
      frame.addRoll(5)
      expect(frame.isComplete()).toEqual(true)
    })
    it('confirms false when only one roll added, and roll was not a strike', function(){
      frame.addRoll(5)
      expect(frame.isComplete()).toEqual(false)
    })
  })
  describe('isComplete when finalFrame == true', function(){
    it('confirms true if roll length === 3', function(){
      finalFrame.addRoll(10)
      finalFrame.addRoll(10)
      finalFrame.addRoll(10)
      expect(finalFrame.isComplete()).toEqual(true)
    })
    it('confirms false if first roll is a strike', function(){
      finalFrame.addRoll(10)
      expect(finalFrame.isComplete()).toEqual(false)
    })
    it('confirms false if first two rolls are strikes', function(){
      finalFrame.addRoll(10)
      finalFrame.addRoll(10)
      expect(finalFrame.isComplete()).toEqual(false)
    })
    it('confirms false if first two rolls are spare', function(){
      finalFrame.addRoll(2)
      finalFrame.addRoll(8)
      expect(finalFrame.isComplete()).toEqual(false)
    })
    it('confirms false for one roll only', function(){
      finalFrame.addRoll(2)
      expect(finalFrame.isComplete()).toEqual(false)
    })
  })

  describe('addRoll', function(){
    it('will throw error and not add roll if equal more than MAX_SCORE, unless final frame', function(){
      frame.addRoll(MAX_SCORE)
      expect(function(){ frame.addRoll(MAX_SCORE)}).toThrow("Roll exceeds max pins")
    })
    it('sets firstRoll to equal amount of pins knocked down',function(){
      frame.addRoll(4)
      expect(frame.rolls[0]).toEqual(4)
    })
    it('sets secondRoll to equal amount of pins knocked down',function(){
      frame.addRoll(6)
      frame.addRoll(4)
      expect(frame.rolls[1]).toEqual(4)
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
