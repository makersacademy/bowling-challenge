describe("Game", function() {
  var game

  beforeEach(function() {
    game = new Game()
  })

  it("each round starts with 10 pins", function() {
    expect(game.pins.length).toEqual(10)
  })
})
