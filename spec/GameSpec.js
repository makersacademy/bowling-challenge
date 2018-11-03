describe ('Game', function () {
  var game = new Game()

  beforeEach(function () {
  })

  describe ('A bowling game', function () {
    it('should have a current score', function () {
      expect(game.getCurrentScore()).toEqual(0)
    })
  })
})
