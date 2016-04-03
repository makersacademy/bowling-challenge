describe('Game', function() {
  var game, pins, spare, strike, frame;

  beforeEach(function() {
    game   = new Game;
    frame  = new Frame;
    pins   = 3
    spare  = 7
    strike = 10

  })

  it('starts a new frame', function(){
    expect(game.currentFrame._isFinished).toEqual(false)
  })

  it('starts new frame after play', function() {
    game.play(pins)
    game.play(pins)
    expect(game.currentFrame).toEqual(frame)
  })

  it('holds max 10 frames', function() {
    for(i = 0; i <= 10; i ++){
      game.play(pins)
      game.play(pins)
    }
    expect(function () {game.play(pins)}).toThrowError('Game Over!')
  })

  it('plays a gutter game', function(){
    for(i = 0; i <= 10; i ++){
      game.play(0)
      game.play(0)
    }
    expect(game.finalScore).toEqual(0)
  })

  it('checks last frame for strike', function(){
    game.play(strike)
    expect(game.latterFrame()._isStrike).toEqual(true)
  })

  it('checks second to last frame for strike', function(){
    game.play(strike)
    game.play(strike)
    expect(game.firstFrame()._isStrike).toEqual(true)
  })

  it('checks last frame for spare', function(){
    game.play(pins)
    game.play(spare)
    expect(game.latterFrame()._isSpare).toEqual(true)
  })

  it('stores score for regular frame', function() {
    game.play(pins)
    game.play(pins)
    expect(game._frameScore).toEqual([6])

  })
  xit('sets score for one strike, one regular frame', function() {
    game.play(strike)
    game.play(pins)
    game.play(pins)
    expect(game._frameScore).toEqual([16, 22])
  })
})
