describe('Strikes and spares work after/with each other:', function() {
  var aGame;

  beforeEach(function() {
    aGame = new Game();
  })

  it('strike - spare,', function() {
    aGame.sendToFrame(10)
    aGame.sendToFrame(7)
    aGame.sendToFrame(3)
    aGame.sendToFrame(2)
    expect(aGame.playedFrames.length).toEqual(2)
    expect(aGame.playedFrames[0].frameScore).toEqual(20)
    expect(aGame.playedFrames[1].frameScore).toEqual(32)
    expect(aGame.currentFrame.frameScore).toEqual(34)
  })

  it('spare - strike, ', function() {
    aGame.sendToFrame(9)
    aGame.sendToFrame(1)
    aGame.sendToFrame(10)
    aGame.sendToFrame(5)
    aGame.sendToFrame(3)
    aGame.sendToFrame(7)
    expect(aGame.playedFrames.length).toEqual(3)
    expect(aGame.playedFrames[0].frameScore).toEqual(20)
    expect(aGame.playedFrames[1].frameScore).toEqual(38)
    expect(aGame.playedFrames[2].frameScore).toEqual(46)
    expect(aGame.currentFrame.frameScore).toEqual(53)
  })

  it('2 strikes, spare,', function() {
    aGame.sendToFrame(10)
    aGame.sendToFrame(10)
    aGame.sendToFrame(2)
    aGame.sendToFrame(8)
    aGame.sendToFrame(7)
    expect(aGame.playedFrames.length).toEqual(3)
    expect(aGame.playedFrames[0].frameScore).toEqual(22)
    expect(aGame.playedFrames[1].frameScore).toEqual(42)
    expect(aGame.playedFrames[2].frameScore).toEqual(59)
    expect(aGame.currentFrame.frameScore).toEqual(66)
  })

  it('spare, strike, spare.', function() {
    aGame.sendToFrame(5)
    aGame.sendToFrame(5)
    aGame.sendToFrame(10)
    aGame.sendToFrame(2)
    aGame.sendToFrame(8)
    aGame.sendToFrame(7)
    expect(aGame.playedFrames.length).toEqual(3)
    expect(aGame.playedFrames[0].frameScore).toEqual(20)
    expect(aGame.playedFrames[1].frameScore).toEqual(40)
    expect(aGame.playedFrames[2].frameScore).toEqual(57)
    expect(aGame.currentFrame.frameScore).toEqual(64)
  })

  // to add: PKK, KPK, PPK, KPP
})
