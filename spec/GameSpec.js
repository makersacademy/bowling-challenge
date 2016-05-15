describe('Game', function() {

  var game
  var frame

  beforeEach(function() {
    game = new Game()
    // frame = {score: function() {
    //           return value
    //         }

    // }
    // spyOn(frame, 'score').and.returnValue(7)
  })

  describe('Rolls', function() {

    it('score for a roll is added to frame score', function() {
      game.roll(4)
      expect(game.frameScore()).toEqual(4)
    })

    it('maximum of 2 rolls per frame', function() {
      game.roll(3)
      game.roll(5)
      expect(game.frameScore()).toEqual(8)
      expect(function() {
        game.roll(4)
      }).toThrowError('Cannot Roll: Frame complete')
    })

  })

  describe('Frames', function() {

    it('can start a new frame', function() {
      game.roll(3)
      game.roll(5)
      game.newFrame()
      expect(game.frameScore()).toEqual(0)
    })

    it('Game tracks the current frame', function() {
      expect(game.frameNumber()).toEqual(1)
      game.newFrame()
      expect(game.frameNumber()).toEqual(2)
      game.newFrame()
      expect(game.frameNumber()).toEqual(3)
    })

    it('ends immediately if player gets a strike', function() {
      game.roll('X')
      expect(function() {
        game.roll(4)
      }).toThrowError('Cannot Roll: Frame complete, you got a Strike!')
    })

    it('game ends after 10 frames', function() {
            for (var i = 0; i < 9; i++) {
        game.newFrame()
      }
      expect( function() {
        game.newFrame()
      }).toThrowError('Cannot start new Frame: Game Over Man')
    })

  })

  describe('Overall Score', function() {

    it('is logged from frame to frame', function() {
      for (var i = 0; i < 3; i++) {
        game.roll(3)
        game.roll(5)
        game.newFrame()
      }
      expect(game.totalScore()).toEqual(24)
    })

  })

})

