describe('FrameLog',function(){
  var framelog
  var frame

  beforeEach(function(){
    frame =  jasmine.createSpyObj('frame',['createFrame','addRoll','isStrike','isSpare'])
    framelog = new FrameLog(frame)
  })

  it('has no frames by default',function(){
    expect(framelog.frames).toEqual([])
  })

  it('has no currentFrame by default', function(){
    expect(framelog.currentFrame).toEqual(null)
  })

  describe('startFrame',function(){
    it('creates a new frame object',function(){
      frame.createFrame.and.returnValue(frame);
      framelog.startFrame(3)
      expect(frame.createFrame).toHaveBeenCalled()
    })
    it('sets currentFrame to new frame object', function(){
      frame.createFrame.and.returnValue(frame);
      framelog.startFrame(2)
      expect(framelog.currentFrame).toEqual(frame)
    })
    it('stores the currentFrame if not a strike',function(){
      frame.createFrame.and.returnValue(frame);
      framelog.startFrame(2)
      expect(framelog.frames).toEqual([frame])
    })
    it('sets the currentFrame to null if frame strike',function(){
      frame.createFrame.and.returnValue(frame);
      frame.isStrike.and.returnValue(true)
      framelog.startFrame(10)
      expect(framelog.currentFrameValue()).toEqual(null)
    })
  })

  describe('endFrame',function(){

    beforeEach(function(){
      frame.createFrame.and.returnValue(frame)
      framelog.startFrame(2)
      framelog.endFrame(3)
    })

    it('adds second roll score to frame',function(){
      expect(frame.addRoll).toHaveBeenCalled()
    })
  })
  describe('frameCount',function(){
    it('returns number of frames stored',function(){
      frame.createFrame.and.returnValue(frame);
      framelog.startFrame(1)
      framelog.startFrame(2)
      expect(framelog.frameCount()).toEqual(2)
    })
  })

  describe('isPreviousFrameStrike',function(){
    beforeEach(function(){
      frame.createFrame.and.returnValue(frame)
    })

    it('calls and returns isStrike function for previous frame',function(){
      frame.isStrike.and.returnValue(true)
      framelog.startFrame(10)
      framelog.startFrame(0)
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
      framelog.startFrame(1)
      framelog.endFrame(9)
      framelog.startFrame(0)
      expect(framelog.isPreviousFrameSpare()).toEqual(true)
      expect(frame.isSpare).toHaveBeenCalled()
    })
  })
})
