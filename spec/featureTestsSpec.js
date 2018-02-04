describe('Feature Test:', function(){
  var game

  beforeEach(function(){
    game = new GameLogic(FrameLog)
    game.newGame()
  })

  it('allows player to start a frame score log', function(){
    expect(game.frameLog).toEqual(jasmine.any(FrameLog))
  })
  it('allows player to add a score for frame', function(){
    game.addRoll(10)
    expect(game.frameLog.frames[0]).toEqual(jasmine.any(Frame))
    expect(game.frameLog.frames[0].firstRoll).toEqual(10)
  })
  it('creates a new frame if previous frame was a strike', function(){
    game.addRoll(10)
    game.addRoll(10)
    expect(game.frameLog.frameCount()).toEqual(2)
    expect(game.isPreviousFrameStrike()).toEqual(true)
    expect(game.frameLog.frames[0].secondRoll).toEqual(0)
    expect(game.frameLog.frames[1].firstRoll).toEqual(10)
  })
  it('knows if current and previous move was a spare', function(){
    game.addRoll(5)
    game.addRoll(5)
    expect(game.isCurrentFrameSpare()).toEqual(true)
    game.addRoll(10)
    expect(game.isPreviousFrameSpare()).toEqual(true)
  })
  it('knows if current move and previous was a strike', function(){
    game.addRoll(10)
    expect(game.isCurrentFrameStrike()).toEqual(true)
    game.addRoll(10)
    expect(game.isPreviousFrameStrike()).toEqual(true)
  })
  it('only allows ten frames if last frame is not a strike or spare', function(){
    var times = FRAME_LIMIT
    for(var i=0; i < times; i++){
      game.addRoll(4)
      game.addRoll(4)
    }
    expect(function(){game.addRoll(3)}).toThrow("No more rolls allowed")
    expect(game.frameLog.frameCount()).toEqual(10)
  })

  // it('will allow extra frame if first roll on 10th frame is strike', function(){
  //   var times = 10
  //   //creates 10 frames of strikes
  //   for(var i=0; i< times; i++){
  //     game.addRoll(10)
  //   }
  //   game.addRoll(10)
  //   expect(game.frameLog.frameCount()).toEqual(11)
  //   expect(game.frameLog.frames[10].firstRoll).toEqual(10)
  // })
  // it('will allow 2 extra rolls if 10th frame was a strike',function(){
  //   var times = 10
  //   //creates 10 frames of strikes
  //   for(var i=0; i< times; i++){
  //     game.addRoll(10)
  //   }
  //   game.addRoll(10)
  //   game.addRoll(3)
  //   expect(function(){game.addRoll(3)}).toThrow("No more rolls allowed")
  //   expect(game.frameLog.frameCount()).toEqual(11)
  // })
  // it('will allow an extra roll if 10th frame was a spare',function(){
  //   var times = FRAME_LIMIT
  //   //creates 10 frames of spares
  //   for(var i=0; i< times; i++){
  //     game.addRoll(5)
  //     game.addRoll(5)
  //   }
  //   game.addRoll(3)
  //   expect(game.frameLog.frameCount()).toEqual(11)
  //   // expect(function(){game.addRoll(3)}).toThrow("No more rolls allowed")
  // })
  // it('will allow only allow one roll for 11th frame',function(){
  //   var times = FRAME_LIMIT
  //   //creates 10 frames of spares
  //   for(var i=0; i< times; i++){
  //     game.addRoll(5)
  //     game.addRoll(5)
  //   }
  //   game.addRoll(3)
  //   expect(function(){game.addRoll(3)}).toThrow("No more rolls allowed")
  //   expect(game.frameLog.frameCount()).toEqual(11)
  //   expect(game.frameLog.currentFrame.secondRoll).toEqual(0)
  // })
})
