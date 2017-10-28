describe("Game", function () {

  beforeEach(function () {
    game = new Game()
  })

  it("stores current frame being played", function () {
    expect(game.currentFrame).toEqual(1)
  })

})
