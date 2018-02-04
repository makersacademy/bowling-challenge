describe('FrameLog',function(){
  var framelog
  var frame

  beforeEach(function(){
    frame =  jasmine.createSpyObj('frame',['firstRoll','createFrame','setSecondRoll','isStrike','isSpare'])
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
      framelog.startFrame(3)
      expect(frame.createFrame).toHaveBeenCalled()
    })
    it('sets currentFrame to new frame object', function(){
      frame.createFrame.and.returnValue(frame);
      framelog.startFrame(2)
      expect(framelog.currentFrame).toEqual(frame)
    })
    it('stores the currentFrame',function(){
      frame.createFrame.and.returnValue(frame);
      framelog.startFrame(2)
      expect(framelog.frames).toEqual([frame])
    })
  })

  describe('endFrame',function(){

    beforeEach(function(){
      frame.createFrame.and.returnValue(frame)
      framelog.startFrame(2)
      framelog.endFrame(3)
    })

    it('adds second roll score to frame',function(){
      expect(frame.setSecondRoll).toHaveBeenCalled()
    })
    it('clears currentFrame',function(){
      expect(framelog.currentFrame).toEqual(null)
    })
  })
  describe('frameCount',function(){
    it('returns number of frames stored',function(){
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
  describe('isCurrentFrameStrike',function(){
    beforeEach(function(){
      frame.createFrame.and.returnValue(frame)
    })

    it('calls and returns isStrike function for current frame',function(){
      frame.isStrike.and.returnValue(true)
      framelog.startFrame(10)
      expect(framelog.isCurrentFrameStrike()).toEqual(true)
      expect(frame.isStrike).toHaveBeenCalled()
    })
  })
  describe('isCurrentFrameSpare',function(){
    beforeEach(function(){
      frame.createFrame.and.returnValue(frame)
    })

    it('calls and returns isSpare function for current frame',function(){
      frame.isSpare.and.returnValue(true)
      framelog.startFrame(9)
      framelog.endFrame(1)
      expect(framelog.isCurrentFrameSpare()).toEqual(true)
      expect(frame.isSpare).toHaveBeenCalled()
    })
  })
})
