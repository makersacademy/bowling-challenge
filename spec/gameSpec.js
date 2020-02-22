describe('Game', function () {
  describe('total', function () {
    it('starts with value 0', function () {
      var game = new Game()
      expect(game.total).toEqual(0)
    })
  })

  describe('add_frame', function () {
    it('adds a new frame', function() {
      var game = new Game()
      game.add_frame(new Frame())
      expect(game.frames[0].roll_one).toEqual(0)
      expect(game.frames.length).toEqual(1)
    })
  })
})