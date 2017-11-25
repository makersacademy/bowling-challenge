describe('Game', function () {

  var game
  var bowling

  beforeEach(function () {
    bowling = new Bowling ()
    game = new Game()
  })

  describe('#initialize', function () {
    it('should initialize a bowling game', function () {
      game.play(bowling())
      expect(game.).toEqual(bowling())
    })
  })
})
