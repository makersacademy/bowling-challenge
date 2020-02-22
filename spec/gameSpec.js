describe('Game', function () {
  describe('at the start', function () {
    it('defaults with value 1', function () {
      var game = new Game()
      expect(game.test).toEqual(1)
    })
  })
})