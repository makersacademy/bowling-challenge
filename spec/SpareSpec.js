describe('A spare', function() {
  var aGame;

  beforeEach(function() {
    aGame = new Game();
  })

  it('gives its own frame a 1-roll bonus (from the next frame),', function() {
    aGame.sendToFrame(3)
    aGame.sendToFrame(7)
    aGame.sendToFrame(5)
    expect(aGame.playedFrames.length).toEqual(1)
    expect(aGame.playedFrames[0].frameScore).toEqual(15)
    expect(aGame.currentFrame.frameScore).toEqual(20)
  })

  it('and knows when to stop adding bonuses.', function() {
    aGame.sendToFrame(4)
    aGame.sendToFrame(6)
    aGame.sendToFrame(7)
    aGame.sendToFrame(2)
    expect(aGame.playedFrames.length).toEqual(2)
    expect(aGame.playedFrames[0].frameScore).toEqual(17)
    expect(aGame.playedFrames[1].frameScore).toEqual(26)
    expect(aGame.currentFrame.frameScore).toEqual(26)
  })
})
