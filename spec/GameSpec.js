describe("Game", function() {
  var game

  beforeEach(function() {
    game = new Game()
  })

  it("each game starts with 10 pins", function() {
    expect(game.pins).toEqual(10)
  })

  it(" 'knocks pins down' by subtracting from pin count", function() {
    game.knockDown(4)
    expect(game.pins).toEqual(6)
  })

  it("resets pin count", function() {
    game.knockDown(4)
    game.resetPins()
    expect(game.pins).toEqual(10)
  })

  it("increments strike count when scoring a strike", function() {
    game.knockDown(10)
    expect(game.strikes).toEqual(1)
  })

  it("increments spare count when scoring a spare", function() {
    game.knockDown(1)
    game.knockDown(9)
    expect(game.spares).toEqual(1)
  })

  it("plays rounds (2 bowls per round)", function() {
    game.knockDown(4)
    game.knockDown(4)
    expect(game.round).toEqual(2)
  })
})
