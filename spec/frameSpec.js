describe("Frame", function() {
  var frame
  var game

  beforeEach(function () {
    frame = new Frame(game)
    game = new Game(frame)
  })

  it('Has 10 pins per frame', function () {
    expect(frame.pins).toEqual(10)
  })

  it('Allows player to play the first game', function () {
    frame.firstBowl(5)
    expect(frame.bowl1).toEqual(5)
  })

  it('Player plays 2 times per frame', function () {
    frame.firstBowl(5)
    frame.secondBowl(5)
    expect(frame.pins).toEqual(0)
    expect(frame.bowl2).toEqual(5)
  })
})