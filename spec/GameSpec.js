describe('Game', function () {
  var frame
  var game

  beforeEach(function () {
    frame = new Frame(game)
    game = new Game()

  })

  it('starts on frame 1', function () {
    expect(game.currentFrame.frameNumber).toEqual(1)
  })

  it('adds scores for first frame of game', function () {
    spyOn(Math, 'floor').and.returnValue(5)
    game.currentFrame.firstBowl()
    game.currentFrame.secondBowl()
    expect(game.score).toEqual(10)
  })

  it('moves to next frame after two rolls', function () {
    game.currentFrame.firstBowl()
    game.currentFrame.secondBowl()
    expect(game.currentFrame.frameNumber).toEqual(2)
  })

  it('stores each frame', function () {
    spyOn(Math, 'floor').and.returnValue(5)
    game.currentFrame.firstBowl()
    game.currentFrame.secondBowl()
    expect(game.gameScores).toContain(10)
    expect(game.currentFrame.frameNumber).toEqual(2)
  })
  it('moves to next frame if player rolls a strike', function () {
    spyOn(Math, 'floor').and.returnValue(10)
    game.currentFrame.firstBowl()
    expect(game.currentFrame.frameNumber).toEqual(2)
  })

  it('adds together scores of two frames', function () {
    spyOn(Math, 'floor').and.returnValue(5)
    game.currentFrame.firstBowl()
    game.currentFrame.secondBowl()
    game.currentFrame.firstBowl()
    game.currentFrame.secondBowl()
    expect(game.score).toEqual(20)
    expect(game.gameScores).toContain(10)
  })
  it('adds a strike bonus', function () {
    spyOn(Math, 'floor').and.returnValue(10)
    game.currentFrame.firstBowl()
    game.currentFrame.firstBowl()
    expect(game.score).toEqual(30)
  })

})
