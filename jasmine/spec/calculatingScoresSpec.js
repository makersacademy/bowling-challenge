describe('perfect game', function() {

  it("accurately sums to 300", function() {
    game = new Game()
    game.allFrames = [
      [10, null],
      [10, null],
      [10, null],
      [10, null],
      [10, null],
      [10, null],
      [10, null],
      [10, null],
      [10, null],
      [10, null],
    ]
    expect(game.calculateScore()).toEqual(300)
  })
})
