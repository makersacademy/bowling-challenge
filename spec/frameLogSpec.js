describe('FrameLog',function(){
  var framelog
  var frame

  beforeEach(function(){
    frame =  jasmine.createSpyObj('frame',['firstRoll','createFrame','setSecondRoll'])
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
      framelog.startFrame()
      expect(frame.createFrame).toHaveBeenCalled()
    })
    it('stores a frame',function(){
      framelog.startFrame(frame)
      expect(framelog.frames.length).toEqual(1)
    })
    it('sets currentFrame to new frame object', function(){
      frame.createFrame.and.returnValue(frame);
      framelog.startFrame(frame)
      expect(framelog.currentFrame).toEqual(frame)
    })
  })
  describe('endFrame',function(){

    beforeEach(function(){
      frame.createFrame.and.returnValue(frame)
      framelog.startFrame(frame)
      framelog.endFrame()
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
      framelog.startFrame(frame)
      framelog.startFrame(frame)
      expect(framelog.frameCount()).toEqual(2)
    })
  })
})
