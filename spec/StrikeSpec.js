describe('A strike', function() {
  var aGame;

  beforeEach(function() {
    aGame = new Game();
  })

  it('makes the game advance to the next frame and recalculate the previous frameScore,', function() {
    aGame.sendToFrame(10)
    aGame.sendToFrame(5)
    expect(aGame.playedFrames.length).toEqual(1)
    expect(aGame.playedFrames[0].frameScore).toEqual(15)
    expect(aGame.currentFrame.frameScore).toEqual(20)
  })

  it('goes well in pairs (two consecutive strikes),', function() {
    aGame.sendToFrame(10)
    aGame.sendToFrame(10)
    expect(aGame.playedFrames.length).toEqual(2)
    expect(aGame.playedFrames[0].frameScore).toEqual(20)
    expect(aGame.playedFrames[1].frameScore).toEqual(30)
    expect(aGame.currentFrame.frameScore).toEqual(30)
  })

  it('or in triples (turkey),', function() {
    aGame.sendToFrame(10)
    aGame.sendToFrame(10)
    aGame.sendToFrame(10)
    expect(aGame.playedFrames.length).toEqual(3)
    expect(aGame.playedFrames[0].frameScore).toEqual(30)
    expect(aGame.playedFrames[1].frameScore).toEqual(50)
    expect(aGame.playedFrames[2].frameScore).toEqual(60)
    expect(aGame.currentFrame.frameScore).toEqual(60)
  })

  it('gives its own frame a 2-roll bonus (from the next frame),', function() {
    aGame.sendToFrame(10)
    aGame.sendToFrame(2)
    aGame.sendToFrame(5)
    expect(aGame.playedFrames.length).toEqual(2)
    expect(aGame.playedFrames[0].frameScore).toEqual(17)
    expect(aGame.playedFrames[1].frameScore).toEqual(24)
    expect(aGame.currentFrame.frameScore).toEqual(24)
  })

  it('gives its own frame a 2-roll bonus (from the next 2 frames, the first one being another strike),', function() {
    aGame.sendToFrame(10)
    aGame.sendToFrame(10)
    aGame.sendToFrame(7)
    expect(aGame.playedFrames.length).toEqual(2)
    expect(aGame.playedFrames[0].frameScore).toEqual(27)
    expect(aGame.playedFrames[1].frameScore).toEqual(44)
    expect(aGame.currentFrame.frameScore).toEqual(51)
  })

  it('and knows when to stop adding bonuses).', function() {
    aGame.sendToFrame(10)
    aGame.sendToFrame(10)
    aGame.sendToFrame(7)
    aGame.sendToFrame(2)
    expect(aGame.playedFrames.length).toEqual(3)
    expect(aGame.playedFrames[0].frameScore).toEqual(27)
    expect(aGame.playedFrames[1].frameScore).toEqual(46)
    expect(aGame.playedFrames[2].frameScore).toEqual(55)
    expect(aGame.currentFrame.frameScore).toEqual(55)
  })

  it('Also, the game knows perfection B)', function() {
    for (i = 0; i < 12; i++) {
      aGame.sendToFrame(10)
    }
    expect(aGame.playedFrames.length).toEqual(10)
    expect(aGame.currentFrame.frameScore).toEqual(300)
    expect(function() {aGame.newCurrentFrame()}).toThrowError('Game over & chill from newCurrentFrame!')
    expect(function() {aGame.addToScore(0)}).toThrowError('Game over & chill!')
  })

  it('as well as despair :-( i.e. a gutter game.', function() {
    for (i = 0; i < 20; i++) {
      aGame.sendToFrame(0)
    }
    expect(aGame.playedFrames.length).toEqual(10)
    expect(aGame.currentFrame.frameScore).toEqual(0)
    expect(function() {aGame.newCurrentFrame()}).toThrowError('Game over & chill from newCurrentFrame!')
    expect(function() {aGame.addToScore(0)}).toThrowError('Game over & chill!')
  })
})
