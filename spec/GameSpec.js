describe('A game', function() {
  var aGame;

  beforeEach(function() {
    aGame = new Game();
  })

  it('starts with an empty array of played frames,', function() {
    expect(aGame.playedFrames).toEqual([])
  })

  it('and with a current frame that is empty', function() {
    expect(aGame.currentFrame.rolls).toEqual([])
  })

  it('and has a frame score of zero.', function() {
    expect(aGame.currentFrame.frameScore).toEqual(0)
  })

  it('The game can send pins to the current frame,', function() {
    aGame.sendToFrame(3)
    aGame.sendToFrame(4)
    expect(aGame.playedFrames[0].rolls).toEqual([3, 4])
    expect(aGame.playedFrames[0].frameScore).toEqual(7)
  })

  it('start a new current frame,', function() {
    aGame.sendToFrame(3)
    aGame.newCurrentFrame()
    expect(aGame.currentFrame.rolls).toEqual([])
    expect(aGame.currentFrame.frameScore).toEqual(0)
  })

  it('add a frame score to the general score and to the played frames array', function() {
    aGame.sendToFrame(3)
    aGame.sendToFrame(4)
    aGame.sendToFrame(5)
    expect(aGame.playedFrames.length).toEqual(1)
    expect(aGame.playedFrames[0].frameScore).toEqual(7)
    expect(aGame.currentFrame.frameScore).toEqual(12)
  })

  it('up to a maximum of ten frames', function() {
    for (i = 0; i < 20; i++) {
      aGame.sendToFrame(3)
    }
    expect(aGame.playedFrames.length).toEqual(10)
    expect(aGame.currentFrame.frameScore).toEqual(60)
    expect(function() {aGame.newCurrentFrame()}).toThrowError('Game over & chill from newCurrentFrame!')
    expect(function() {aGame.addToScore(0)}).toThrowError('Game over & chill!')
  })

  it('The game only accepts integers between 0 and GAME_PINS (10) to send to a roll via a frame,', function() {
    expect(function() {aGame.sendToFrame(11)}).toThrowError('No way! There are 10 pins in this game and they only come as non-negative integers.')
    expect(function() {aGame.sendToFrame(2.5)}).toThrowError('No way! There are 10 pins in this game and they only come as non-negative integers.')
    expect(function() {aGame.sendToFrame(-2)}).toThrowError('No way! There are 10 pins in this game and they only come as non-negative integers.')
  })

  it('and it only accepts a maximum of GAME_PINS (10) pins per frame', function() {
    aGame.sendToFrame(5)
    expect(function() {aGame.sendToFrame(6)}).toThrowError('Hey! There are only 10 pins in the game!')
  })
})
