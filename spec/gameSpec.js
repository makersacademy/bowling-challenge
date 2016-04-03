describe('Game', function() {
  var game;
  var pins;
  var frame;

  beforeEach(function() {
    game  = new Game;
    frame = new Frame;
    pins  = 3

  })

  it('starts a new frame', function(){
    expect(game.currentFrame._isFinished).toEqual(false)
  })

  xit('gets score for regular frame', function() {
    game.play(pins)
    game.play(pins)
    expect(game.frameScore).toEqual(pins + pins)
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
})
