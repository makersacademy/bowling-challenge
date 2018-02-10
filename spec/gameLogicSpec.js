describe('GameLogic',function(){
  var gamelogic
  var framelog

  beforeEach(function(){
    framelog = jasmine.createSpyObj('framelog',['addRoll','createFrameLog'])
    gamelogic = new GameLogic(framelog)
    framelog.createFrameLog.and.returnValue(framelog);
    gamelogic.newGame()
  })

  it('initializes with empty array of scores', function(){
    expect(gamelogic.scores).toEqual([])
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
    it('calls on framelog to addRoll',function(){
      gamelogic.addRoll(2)
      expect(framelog.addRoll).toHaveBeenCalled()
    })
  })

})
