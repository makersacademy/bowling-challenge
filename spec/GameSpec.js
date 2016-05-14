describe('Game', function() {

  var game
  var frame

  beforeEach(function() {
    game = new Game()
    frame = {score: function() {
      return value
    }}
    spyOn(frame, 'score').and.returnValue(7)
  })

  it('logs the score of a frame', function() {
    game.addFrame(frame.score())
    expect(game.totalScore()).toEqual(7)
  })

  it('logs the total score of successive frames', function() {
    game.addFrame(frame.score())
    game.addFrame(frame.score())
    expect(game.totalScore()).toEqual(14)
  })

  it('tracks the current frame', function() {
    game.addFrame(frame.score())
    game.addFrame(frame.score())
    game.addFrame(frame.score())
    expect(game.frameNumber()).toEqual(3)
  })



})

