describe('GameLogic',function(){
  var gamelogic
  var framelog

  beforeEach(function(){
    framelog = jasmine.createSpyObj('framelog',['frameCount','createFrameLog','startFrame','endFrame','isPreviousFrameStrike', 'isPreviousFrameSpare','isCurrentFrameSpare', 'isCurrentFrameStrike', 'currentFrameValue'])
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
      framelog.isCurrentFrameStrike.and.returnValue(false)
      gamelogic.addRoll(2)
      gamelogic.addRoll(2)
      expect(framelog.endFrame).toHaveBeenCalled()
    })

    it('will not add a new frame if frameCount at limit and last frame was not a spare or strike', function(){
      framelog.currentFrameValue.and.returnValue(null)
      framelog.frameCount.and.returnValue(FRAME_LIMIT)
      framelog.isCurrentFrameSpare.and.returnValue(false)
      framelog.isCurrentFrameStrike.and.returnValue(false)
      expect(function() { gamelogic.addRoll()}).toThrow("No more rolls allowed")
    })

    it('will allow one extra roll if frameCount 10 and last frame was a spare or strike',function(){
      framelog.frameCount.and.returnValue(FRAME_LIMIT)
      framelog.currentFrameValue.and.returnValue(null)
      framelog.isCurrentFrameStrike.and.returnValue(true)
      gamelogic.addRoll(2)
      expect(framelog.startFrame).toHaveBeenCalled()
    })

    it('will not add second score if currentFrame is strike, and not at framelimit and raise new frame',function(){
        framelog.isCurrentFrameStrike.and.returnValue(true)
        framelog.frameCount.and.returnValue(2)
        gamelogic.addRoll(3)
        expect(framelog.startFrame).toHaveBeenCalled()
      })

      it('will add secondRollScore if currentFrame is strike and framecount === framelimit', function(){
        framelog.isCurrentFrameStrike.and.returnValue(true)
        framelog.frameCount.and.returnValue(FRAME_LIMIT)
        gamelogic.addRoll(3)
        expect(framelog.endFrame).toHaveBeenCalled()
      })

      it('will not add secondRollScore if currentFrame is strike and framecount === framelimit + 1', function(){
        framelog.isCurrentFrameStrike.and.returnValue(true)
        framelog.frameCount.and.returnValue(FRAME_LIMIT + 1)
        expect(function() {gamelogic.addRoll(3)}).toThrow("No more rolls allowed")
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

  describe('isPreviousFrameStrike',function(){
    it('calls on framelog to confirm if previous frame strike',function(){
      gamelogic.isPreviousFrameStrike()
      expect(framelog.isPreviousFrameStrike).toHaveBeenCalled()
    })
  })

  describe('isPreviousFrameSpare',function(){
    it('calls on framelog to confirm if previous frame strike',function(){
      gamelogic.isPreviousFrameSpare()
      expect(framelog.isPreviousFrameSpare).toHaveBeenCalled()
    })
  })

  describe('isCurrentFrameSpare',function(){
    it('calls on framelog to confirm if current frame strike',function(){
      gamelogic.isCurrentFrameSpare()
      expect(framelog.isCurrentFrameSpare).toHaveBeenCalled()
    })
  })

  describe('isCurrentFrameStrike',function(){
    it('calls on framelog to confirm if current frame strike',function(){
      gamelogic.isCurrentFrameStrike()
      expect(framelog.isCurrentFrameStrike).toHaveBeenCalled()
    })
  })
})
