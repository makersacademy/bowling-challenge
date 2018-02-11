describe('Feature Test:', function(){
  var game

  beforeEach(function(){
    game = new FrameLog()
  })

  it('allows player to add a score for frame', function(){
    game.addRoll(10)
    expect(game.frames[0]).toEqual(jasmine.any(Frame))
    expect(game.frames[0].rolls[0]).toEqual(10)
  })
  it('creates a new frame if previous frame was a strike', function(){
    game.addRoll(10)
    game.addRoll(10)
    expect(game.frameCount()).toEqual(2)
    expect(game.frames[1].score()).toEqual(10)
  })
  
  it('will not allow a player to add more than max score for frame', function(){
    game.addRoll(8)
    expect(function(){game.addRoll(3)}).toThrow("Roll exceeds max pins")
  })

  it('only allows ten frames if last frame is not a strike or spare', function(){
    var times = FRAME_LIMIT
    for(var i=0; i < times; i++){
      game.addRoll(4)
      game.addRoll(4)
    }
    expect(function(){game.addRoll(3)}).toThrow("Frame set is complete - no more roll's allowed")
    expect(game.frameCount()).toEqual(10)
  })

  it('will allow extra roll if first roll on 10th frame is strike', function(){
    var times = 10
    //creates 10 frames of strikes
    for(var i=0; i< times; i++){
      game.addRoll(10)
    }
    game.addRoll(10)
    expect(game.frames[9].rolls.length).toEqual(2)
    expect(game.frames[9].score()).toEqual(20)
  })

  it('will allow no more than 2 extra rolls if 10th frame was two strikes',function(){
    var times = FRAME_LIMIT
    //creates 10 frames of strikes
    for(var i=0; i< times; i++){
      game.addRoll(10)
    }
    game.addRoll(10)
    game.addRoll(3)
    expect(function(){game.addRoll(3)}).toThrow("Frame set is complete - no more roll's allowed")
    expect(game.frames[9].rolls.length).toEqual(3)
  })

  it('will allow an extra roll if 10th frame was a spare',function(){
    var times = FRAME_LIMIT
    //creates 10 frames of spares
    for(var i=0; i< times; i++){
      game.addRoll(5)
      game.addRoll(5)
    }
    game.addRoll(3)
    expect(game.frames[9].rolls.length).toEqual(3)
    expect(game.frames[9].score()).toEqual(13)
    expect(function(){game.addRoll(3)}).toThrow("Frame set is complete - no more roll's allowed")
  })

  it('adds next two rolls to frame if frame strike', function(){
    game.addRoll(10)
    game.addRoll(10)
    game.addRoll(10)
    expect(game.frames[0].score()).toEqual(30)
  })

  it('adds next two roll to frame if frame spare', function(){
    game.addRoll(5)
    game.addRoll(5)
    game.addRoll(3)
    game.addRoll(3)
    expect(game.frames[0].score()).toEqual(13)
  })

  it('calculates a score of 300 for perfect set', function(){
    var times = FRAME_LIMIT + 1
    for(var i=0; i< times; i++){
      game.addRoll(10)
    }
    game.addRoll(10)
    expect(game.calculateScore()).toEqual(300)
  })
  it('calculates a score of 0 for game of 0 rolls', function(){
    var times = FRAME_LIMIT + 1
    for(var i=0; i< times; i++){
      game.addRoll(0)
    }
    expect(game.calculateScore()).toEqual(0)
  })

  it('calculates a score of 150 for game of spares', function(){
    var times = FRAME_LIMIT
    for(var i=0; i< times; i++){
      game.addRoll(5)
      game.addRoll(5)
    }
    game.addRoll(5)
    expect(game.calculateScore()).toEqual(150)
  })
})
