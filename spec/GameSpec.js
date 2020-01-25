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
    it('adds new frame to frames array', function() {
      game.newFrame(5)
      expect(game.frames[0]).toEqual({roll1: 5, roll2: 0, total: 5, type: ''})
    })

    it('adds new frame to frames array - strike', function() {
      game.newFrame(10)
      expect(game.frames[0]).toEqual({roll1: 10, roll2: 0, total: 10, type: 'strike'})
    })
  })

  describe("#updateFrame", function() {
    it('updates an existing frame with score of roll2', function() {
      game.newFrame(5)
      game.updateFrame(1)
      expect(game.frames[0]).toEqual({roll1: 5, roll2: 1, total: 6, type: ''})
    })

    it('updates an existing frame with score of roll2 and rolltype - spare', function() {
      game.newFrame(5)
      game.updateFrame(5)
      expect(game.frames[0]).toEqual({roll1: 5, roll2: 5, total: 10, type: 'spare'})
    })

  })

  it('only allows 10 frames', function() {
    expect(function() {
      for (var i = 0; i < 11; i++) {
        game.newFrame(1)
      };
    }).toThrowError("Game Over");
  })

})