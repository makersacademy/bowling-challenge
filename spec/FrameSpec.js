describe('Frame',function(){

  var frame

  beforeEach(function(){
    frame = new Frame()
  })

  it('should have an outcome property',function(){
    expect(frame.outcome).toBeDefined()
  })

  it('should have firstroll property',function(){
    expect(frame.firstroll).toBeDefined()
  })

  it('should have secondroll property',function(){
    expect(frame.secondroll).toBeDefined()
  })

  it('should have an outcome method',function(){
    expect(frame.outcome()).toBeDefined()
  })

  describe('#saveRoll', function(){
    it('have saves the firstroll',function(){
      frame.saveRoll(3)
      expect(frame.firstroll).toEqual(3)
    })
    it('have save the secondroll',function(){
      frame.firstroll = 3
      frame.saveRoll(4)
      expect(frame.secondroll).toEqual(4)
    })
  })

  describe('#isComplete', function(){
    it('returns true when it has two rolls',function(){
      frame.firstroll = 2
      frame.secondroll = 6
      expect(frame.isComplete()).toEqual(true)
    })
    it('returns true when first roll is a strike',function(){
      frame.firstroll = 10
      expect(frame.isComplete()).toEqual(true)
    })
    it('returns false when it has one only roll that is not a strike',function(){
      frame.firstroll = 2
      expect(frame.isComplete()).toEqual(false)
    })
  })

  describe('#isAStrike', function(){
    it('returns true if first roll is a strike',function(){
      frame.firstroll = 10
      expect(frame.isAStrike()).toEqual(true)
    })
  })
})
