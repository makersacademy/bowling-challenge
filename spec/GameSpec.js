describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  })

  describe('#viewScore', function() {
    it('starts with score of 0', function() {
      expect(game.viewScore()).toEqual(0)
    })
  })
  

  describe('#viewFrames', function() {
    it('starts with empty array of frames', function() {
      expect(game.viewFrames()).toEqual([])
    })
  })

  describe('#roll', function() {
    it('returns number of pins when user rolls < 10', function() {
      expect(game.roll(5)).toEqual(5)
    })

    it('returns "strike" when user rolls 10', function() {
      expect(game.roll(10)).toEqual('strike')
    })

    it('updates score when user rolls', function() {
      game.roll(1)
      expect(game.score).toEqual(1)
    })
  })

  describe("#newFrame", function() {
    it('creates new frame with score of roll1', function() {
      expect(game.newFrame(5)).toEqual({roll1: 5, roll2: 0, total: 5, type: ''})
    })

    it('creates new frame with score of roll1, adds to frames if roll1 is a strike', function() {
      game.newFrame(10)
      expect(game.frames[0]).toEqual({roll1: 10, roll2: 0, total: 10, type: 'strike'})
    })
  })



})