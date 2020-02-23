describe('Game', function () {
  
  var game
  beforeEach(function() {
    game = new Game()
  })
  
  describe('total', function () {
    it('starts with value 0', function () {
      var game = new Game()
      expect(game.total).toEqual(0)
    })
  })

  describe('add_frame', function () {
    it('adds a new frame', function() {
      var game = new Game()
      game.add_frame(new Frame([2,5]))
      expect(game.frames[0].total_without_bonus()).toEqual(7)
      expect(game.frames.length).toEqual(1)
    })
  })

  describe('update_total', function() {
    it('returns score when no strikes or spares', function() {
      var game = new Game()
      var frame = new Frame([4,5])
      for(var i = 0; i < 10; i++) {
        game.add_frame(frame)
        game.update_total(frame)
      }
      expect(game.frames.length).toEqual(10)
      expect(game.total).toEqual(90)
    })

    it('returns score when spares but not strikes', function() {
      
    })
  })
})
