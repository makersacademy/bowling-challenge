describe("Game", function() {
  var game

  beforeEach(function() {
    game = new Game()
  })

  it("each game starts with 10 pins", function() {
    expect(game.pins.length).toEqual(10)
  })

  it(" 'knocks pins down' by removing entries from the pins array", function() {
    game.knockDown(4)
    expect(game.pins.length).toEqual(6)
  })

  it("resets pins array", function() {
    game.knockDown(4)
    game.resetPins()
    expect(game.pins.length).toEqual(10)
  })
})
