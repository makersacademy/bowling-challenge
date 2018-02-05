describe('FrameLog',function(){
  var framelog
  var frame

  beforeEach(function(){
    frame =  jasmine.createSpyObj('frame',['createFrame','addRoll','isComplete','isStrike','isSpare'])
    framelog = new FrameLog(frame)
  })

  it('has no frames by default',function(){
    expect(framelog.frames).toEqual([])
  })

  describe('addRoll',function(){
    it('creates a new frame object',function(){
      frame.createFrame.and.returnValue(frame);
      framelog.addRoll(3)
      expect(frame.createFrame).toHaveBeenCalled()
    })
    it('calls addRoll on frame object', function(){
      frame.createFrame.and.returnValue(frame);
      framelog.addRoll(2)
      expect(frame.addRoll).toHaveBeenCalled()
    })
    it('calls isComplete on frame object - and returns new frame if true',function(){
      frame.createFrame.and.returnValue(frame);
      framelog.addRoll(10)
      framelog.addRoll(10)
      expect(frame.isComplete).toHaveBeenCalled()
      expect(frame.createFrame).toHaveBeenCalled()
    })
    it('it stores a frame',function(){
      frame.createFrame.and.returnValue(frame);
      framelog.addRoll(10)
      expect(framelog.frames).toEqual([frame])
    })
    it('will not create a new frame if call is isComplete returns false',function(){
      frame.createFrame.and.returnValue(frame);
      frame.isComplete.and.returnValue(true);
      framelog.addRoll(2)
      frame.isComplete.and.returnValue(false);
      framelog.addRoll(6)
      expect(framelog.frames.length).toEqual(1)
    })
  })

  describe('isPreviousFrameStrike',function(){
    beforeEach(function(){
      frame.createFrame.and.returnValue(frame)
    })

    it('calls and returns isStrike function for previous frame',function(){
      frame.isStrike.and.returnValue(true)
      framelog.addRoll(10)
      frame.isComplete.and.returnValue(true);
      framelog.addRoll(0)
      expect(framelog.isPreviousFrameStrike()).toEqual(true)
      expect(frame.isStrike).toHaveBeenCalled()
    })
  })
  describe('isPreviousFrameSpare',function(){
    beforeEach(function(){
      frame.createFrame.and.returnValue(frame)
    })
    it('call and returns isSpare function for previous frame',function(){
      frame.isSpare.and.returnValue(true)
      framelog.addRoll(1)
      framelog.addRoll(9)
      frame.isComplete.and.returnValue(true);
      framelog.addRoll(0)
      expect(framelog.isPreviousFrameSpare()).toEqual(true)
      expect(frame.isSpare).toHaveBeenCalled()
    })
  })
})
