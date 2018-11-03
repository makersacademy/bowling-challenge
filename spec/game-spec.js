describe ('Game', function () {
  var game = new Game()

  beforeEach(function () {
  })

  describe ('A bowling game', function () {
    it('should have a current score', function () {
      expect(game.getCurrentScore()).toEqual(0)
    })

    it('should start at frame 1', function () {
      expect(game.getCurrentFrame()).toEqual(1)
    })

    it('can start the next frame', function () {
      game.startNextFrame()
      expect(game.getCurrentFrame()).toEqual(2)
    })
  })
})
