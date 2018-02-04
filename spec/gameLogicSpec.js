describe('GameLogic',function(){
  var gamelogic
  var framelog

  beforeEach(function(){
    framelog = jasmine.createSpyObj('framelog',['frameCount','createFrameLog','startFrame','endFrame', 'currentFrameValue'])
    gamelogic = new GameLogic(framelog)
    framelog.createFrameLog.and.returnValue(framelog);
    gamelogic.newGame()
  })

  describe('newGame',function(){
    it('can create with a new framelog object', function(){
      expect(framelog.createFrameLog).toHaveBeenCalled()
    })
    it('stores a framelog', function(){
      expect(gamelogic.frameLog).toEqual(framelog)
    })
  })

  describe('addRoll',function(){
    it('can call FrameLog to add a new frame',function(){
      framelog.currentFrameValue.and.returnValue(null)
      gamelogic.addRoll(2)
      expect(framelog.startFrame).toHaveBeenCalled()
    })
    it('can call FrameLog to end a frame if previous roll not strike',function(){
      gamelogic.addRoll(2)
      gamelogic.addRoll(2)
      expect(framelog.endFrame).toHaveBeenCalled()
    })

    it('will not add a new frame if frameCount at limit', function(){
      framelog.currentFrameValue.and.returnValue(null)
      framelog.frameCount.and.returnValue(FRAME_LIMIT)
      expect(function() { gamelogic.addRoll()}).toThrow("No more rolls allowed")
    })
  })
  describe('isFrameLimit',function(){
    beforeEach(function(){
      framelog.frameCount.and.returnValue(FRAME_LIMIT)
    })
    it('calls on framelog for frame count',function(){
      gamelogic.isFrameLimit()
      expect(framelog.frameCount).toHaveBeenCalled()
    })
  })
})
