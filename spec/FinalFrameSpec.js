describe('In the final frame', function() {
  var aGame;

  beforeEach(function() {
    aGame = new Game();
  })

  it('a spare gives a bonus roll in the current frame', function() {
    for (i = 0; i < 19; i++) {
      aGame.sendToFrame(3)
    }
    aGame.sendToFrame(7)
    expect(aGame.playedFrames.length).toEqual(9)
    expect(aGame.currentFrame.frameScore).toEqual(64)
    expect(function() {aGame.newCurrentFrame()}).not.toThrowError('Game over & chill from newCurrentFrame!')
    expect(function() {aGame.sendToFrame(5)}).not.toThrowError('Impossibru - frame overflow!')
  })

  it('a spare has the game ending with a 3-roll final frame', function() {
    for (i = 0; i < 19; i++) {
      aGame.sendToFrame(3)
    }
    aGame.sendToFrame(7)
    aGame.sendToFrame(5)
    expect(aGame.playedFrames.length).toEqual(10)
    expect(aGame.currentFrame.frameScore).toEqual(69)
    expect(function() {aGame.newCurrentFrame()}).toThrowError('Game over & chill from newCurrentFrame!')
    expect(function() {aGame.sendToFrame(3)}).toThrowError('Impossibru - frame overflow!')
  })

  it('a strike gives 2 bonus rolls in the current frame', function() {
    for (i = 0; i < 18; i++) {
      aGame.sendToFrame(3)
    }
    aGame.sendToFrame(10)
    aGame.sendToFrame(2)
    expect(aGame.playedFrames.length).toEqual(9)
    expect(aGame.currentFrame.frameScore).toEqual(66)
    expect(function() {aGame.newCurrentFrame()}).not.toThrowError('Game over & chill from newCurrentFrame!')
    expect(function() {aGame.sendToFrame(5)}).not.toThrowError('Impossibru - frame overflow!')
  })

  it('a strike has the game ending with a 3-roll final frame', function() {
    for (i = 0; i < 18; i++) {
      aGame.sendToFrame(3)
    }
    aGame.sendToFrame(10)
    aGame.sendToFrame(2)
    aGame.sendToFrame(6)
    expect(aGame.playedFrames.length).toEqual(10)
    expect(aGame.currentFrame.frameScore).toEqual(72)
    expect(function() {aGame.newCurrentFrame()}).toThrowError('Game over & chill from newCurrentFrame!')
    expect(function() {aGame.sendToFrame(5)}).toThrowError('Impossibru - frame overflow!')
  })
})
