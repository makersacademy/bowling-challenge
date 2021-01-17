describe('Game', function() {
  var game;

  beforeEach( function() {
    game = new Game();
  })

  describe('#isNew', function() {
    it('should return true', function() {
      expect(game.isNew()).toBe(true)
    })
  })

  describe('#addFrame', function() {
    it('should instantiate a new frame', function() {
      game.addFrame(1)
      expect(game.isNew()).toBe(false)
    })
  })

  describe('#addRoll', function() {
    it('should add roll to an existing frame', function() {
      game.addFrame(1)
      game.addRoll(1)
      expect(game.currentFrame().totalScore()).toEqual(2)
    })
  })

  describe('#currentFrame', function() {
    it('should return the current frame', function() {
      game.addFrame(1)
      expect(game.currentFrame()).toBeInstanceOf(Frame)
    })
  })

  describe('#notFrameTen', function() {
    it('should return true if not the 10th frame', function() {
      game.addFrame(1)
      expect(game.notFrameTen()).toBe(true)
    })

    it('should return false if in the 10th frame', function() {
      for (var i = 0; i < 10; i++) {
        game.addFrame(10)
      }
      expect(game.notFrameTen()).toBe(false)
    })
  })

  describe('#addSpareBonuses', function() {
    it('should add the spare bonus to a frame', function(){
      game.addFrame(1)
      game.addRoll(9)
      game.addFrame(5)
      game.addSpareBonuses()
      expect(game.frames[0].totalScore()).toEqual(15)
    })
  })

  describe('#addStrikeBonuses', function() {
    it('should add the strike bonus to a frame', function(){
      game.addFrame(10)
      game.addFrame(5)
      game.addRoll(4)
      game.addStrikeBonuses()
      expect(game.frames[0].totalScore()).toEqual(19)
    })
  })

  describe('#cumualitve', function() {
    it('should calculate cumulative score by frame', function(){
      game.addFrame(10)
      game.addFrame(5)
      game.addRoll(4)
      game.addStrikeBonuses()
      expect(game.cumulative()).toEqual([19, 28])
    })
  })
})
