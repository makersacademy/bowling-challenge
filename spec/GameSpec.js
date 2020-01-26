describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  })

  describe('#viewScore', function() {
    it('starts with score of 0', function() {
      expect(game.viewScore()).toEqual(0)
    })

    it('sums total of frames scores', function() {
      game.newFrame(5)
      game.updateFrame(4)
      game.newFrame(1)
      game.updateFrame(2)
      expect(game.viewScore()).toEqual(12)
    })
  })


  describe('#viewFrames', function() {
    it('starts with empty array of frames', function() {
      expect(game.viewFrames()).toEqual([])
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

    it('updates total score', function() {
      game.newFrame(5)
      expect(game.viewScore()).toEqual(5)
    })

    it('adds bonus if the previous frame was a spare', function() {
      game.newFrame(5)
      game.updateFrame(5)
      game.newFrame(1)
      expect(game.frames[0].total).toEqual(11)
    })

    it('adds bonus if the previous frame was a strike', function() {
      game.newFrame(10)
      game.newFrame(5)
      expect(game.frames[0].total).toEqual(15)
    })

    it('adds bonus if two frames prior was a strike', function() {
      game.newFrame(10)
      game.newFrame(5)
      game.updateFrame(1)
      game.newFrame(1)
      expect(game.frames[0].total).toEqual(16)
    })

    it('creates frame with 3 rolls in 10th frame', function() {
      for (var i = 0; i < 9; i++) {
        game.newFrame(1)
      }
      game.newFrame(5)
      expect(game.frames[9]).toEqual({roll1: 5, roll2: 0, roll3: 0, total: 5, type: ''})
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

    it('updates total score', function() {
      game.newFrame(5)
      game.updateFrame(1)
      expect(game.viewScore()).toEqual(6)
    })

    it('raises error if roll1 was a strike', function() {
      expect(function() {
        game.newFrame(10)
        game.updateFrame(1)
      }).toThrowError("Nice try");
    })

    it('allows player to roll again if a strike is thrown in 10th frame', function() {
      for (var i = 0; i < 9; i++) {
        game.newFrame(1)
        game.updateFrame(1)
      }
      game.newFrame(10)
      game.updateFrame(1)
      expect(game.frames[game.frames.length -1]).toEqual({roll1: 10, roll2: 1, roll3: 0, total: 11, type: 'strike'})
    })

    it('gives player bonus role if a second strike is thrown in 10th frame', function() {
      for (var i = 0; i < 9; i++) {
        game.newFrame(1)
        game.updateFrame(1)
      }
      game.newFrame(10)
      game.updateFrame(10)
      game.updateFrame(5)
      expect(game.frames[game.frames.length -1]).toEqual({roll1: 10, roll2: 10, roll3: 5, total: 25, type: 'strike'})
    })

    it('gives player bonus role if spare is thrown in 10th frame', function() {
      for (var i = 0; i < 9; i++) {
        game.newFrame(1)
        game.updateFrame(1)
      }
      game.newFrame(5)
      game.updateFrame(5)
      game.updateFrame(1)
      expect(game.frames[game.frames.length -1]).toEqual({roll1: 5, roll2: 5, roll3: 1, total: 11, type: 'spare'})
    })

    it('expect error to be thrown if trying to add bonus in 10th frame with no strike or spare', function() {
      for (var i = 0; i < 10; i++) {
        game.newFrame(1)
        game.updateFrame(1)
      }
      expect(function() {
        game.updateFrame(1)
      }).toThrowError("No bonus for you - game over");
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
