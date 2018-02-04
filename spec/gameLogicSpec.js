describe('GameLogic',function(){
  var gamelogic
  var framelog

  beforeEach(function(){
    framelog = jasmine.createSpyObj('framelog',['frameCount','createFrameLog'])
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
})
