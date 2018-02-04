describe('GameLogic',function(){
  var gamelogic
  var framelog

  beforeEach(function(){
    framelog = jasmine.createSpyObj('framelog',['frameCount','createFrameLog','startFrame','endFrame','isPreviousFrameStike', 'isPreviousFrameSpare'])
    gamelogic = new GameLogic(framelog)
    framelog.createFrameLog.and.returnValue(framelog);
  })

  describe('newGame',function(){
    it('can create with a new framelog object', function(){
      gamelogic.newGame()
      expect(framelog.createFrameLog).toHaveBeenCalled()
    })
    it('stores a framelog', function(){
      gamelogic.newGame()
      expect(gamelogic.currentFrameLog).toEqual(framelog)
    })
  })

  describe('addNextFrameScoreFirstRoll',function(){
    it('can call FrameLog to add a new frame',function(){
      gamelogic.newGame()
      gamelogic.addNextFrameScoreFirstRoll(2)
      expect(framelog.startFrame).toHaveBeenCalled()
    })
  })
  describe('addFrameScoreSecondRoll',function(){
    it('can call FrameLog to add a new frame',function(){
      gamelogic.newGame()
      gamelogic.FrameScoreSecondRoll(2)
      expect(framelog.endFrame).toHaveBeenCalled()
    })
  })

  describe('isTenthFrame',function(){
    beforeEach(function(){
      gamelogic.newGame()
      framelog.frameCount.and.returnValue(10)
    })

    it('calls on framelog for frame count',function(){
      gamelogic.isTenthFrame()
      expect(framelog.frameCount).toHaveBeenCalled()
    })
    it('knows when game is on 10th frame', function(){
      expect(gamelogic.isTenthFrame()).toEqual(true)
    })
  })

  describe('isPreviousFrameStike',function(){
    beforeEach(function(){
      gamelogic.newGame()
    })

    it('calls on framelog to confirm if previous frame strike',function(){
      gamelogic.isPreviousFrameStike()
      expect(framelog.isPreviousFrameStike).toHaveBeenCalled()
    })
    it('returns outcome of framelog call ',function(){
      framelog.isPreviousFrameStike.and.returnValue(true)
      expect(gamelogic.isPreviousFrameStike()).toEqual(true)
    })
  })

  describe('isPreviousFrameSpare',function(){
    beforeEach(function(){
      gamelogic.newGame()
    })
    it('calls on framelog to confirm if previous frame strike',function(){
      gamelogic.isPreviousFrameSpare()
      expect(framelog.isPreviousFrameSpare).toHaveBeenCalled()
    })
    it('returns outcome of framelog call ',function(){
      framelog.isPreviousFrameSpare.and.returnValue(false)
      expect(gamelogic.isPreviousFrameSpare()).toEqual(false)
    })
  })
})
