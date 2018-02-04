describe('Feature Test:', function(){
  var game

  beforeEach(function(){
    game = new GameLogic(FrameLog)
    game.newGame()
  })
  it('allows player to start a frame score log', function(){
    expect(game.currentFrameLog).toEqual(jasmine.any(FrameLog))
  })
  it('allows player to add a score for frame', function(){
    game.startFrame(10)
    expect(game.currentFrameLog.currentFrame).toEqual(jasmine.any(Frame))
    expect(game.currentFrameLog.currentFrame.firstRoll).toEqual(10)
  })
  it('creates a new frame if previous frame was a strike', function(){
    game.startFrame(10)
    game.completeFrame(10)
    expect(game.currentFrameLog.frameCount()).toEqual(2)
    expect(game.isPreviousFrameStrike()).toEqual(true)
    expect(game.currentFrameLog.frames[0].secondRoll).toEqual(0)
    expect(game.currentFrameLog.frames[1].firstRoll).toEqual(10)
  })
  it('knows if current and previous move was a spare', function(){
    game.startFrame(5)
    game.completeFrame(5)
    expect(game.isCurrentFrameSpare()).toEqual(true)
    game.startFrame(10)
    expect(game.isPreviousFrameSpare()).toEqual(true)
  })
  it('knows if current move and previous was a strike', function(){
    game.startFrame(10)
    expect(game.isCurrentFrameStrike()).toEqual(true)
    game.completeFrame(10)
    expect(game.isPreviousFrameStrike()).toEqual(true)
  })
  it('only allows ten frames if last frame is not a strike or spare', function(){
    var times = FRAME_LIMIT
    for(var i=0; i < times; i++){
      game.startFrame(4)
      game.completeFrame(4)
    }
    expect(function(){game.startFrame(3)}).toThrow("No more rolls allowed")
    expect(game.currentFrameLog.frameCount()).toEqual(10)
  })

  it('will allow second roll score to be added if first roll on 10th frame is strike', function(){
    var times = 5
    //creates 10 frames of strikes
    for(var i=0; i< times; i++){
      game.startFrame(10)
      game.completeFrame(10)
    }
    game.completeFrame(10)
    expect(game.currentFrameLog.frameCount()).toEqual(10)
    expect(game.currentFrameLog.currentFrame.secondRoll).toEqual(10)
  })
  it('will allow 2 extra rolls if 10th frame was a strike',function(){
    var times = 5
    //creates 10 frames of strikes
    for(var i=0; i< times; i++){
      game.startFrame(10)
      game.completeFrame(10)
    }
    game.completeFrame(10)
    game.startFrame(3)
    expect(function(){game.completeFrame(3)}).toThrow("No more rolls allowed")
    expect(game.currentFrameLog.frameCount()).toEqual(11)
  })
  it('will allow an extra roll if 10th frame was a spare',function(){
    var times = FRAME_LIMIT
    //creates 10 frames of spares
    for(var i=0; i< times; i++){
      game.startFrame(5)
      game.completeFrame(5)
    }
    game.startFrame(3)
    console.log(game.currentFrameLog)
    expect(game.currentFrameLog.frameCount()).toEqual(11)
    expect(function(){game.completeFrame(3)}).toThrow("No more rolls allowed")
  })
  it('will allow only allow one roll for 11th frame',function(){
    var times = FRAME_LIMIT
    //creates 10 frames of spares
    for(var i=0; i< times; i++){
      game.startFrame(5)
      game.completeFrame(5)
    }
    game.startFrame(3)
    expect(function(){game.completeFrame(3)}).toThrow("No more rolls allowed")
    expect(game.currentFrameLog.frameCount()).toEqual(11)
    expect(game.currentFrameLog.currentFrame.secondRoll).toEqual(0)
  })
})
