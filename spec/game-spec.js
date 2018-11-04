describe ('Game', function () {
  var game
  var frame
  var currentFrame

  beforeEach(function () {
    game = new Game()
    currentFrame = game.getCurrentFrame()
    frame = jasmine.createSpyObj('frame', ['getScore'])
  })

  describe ('A bowling game', function () {
    it('can store a list of frames', function () {
      expect(game.getFrames()).toEqual([currentFrame])
    })

    it('should have a current score', function () {
      expect(game.getCurrentScore()).toEqual(0)
    })

    it('should start at frame 1', function () {
      expect(game.getCurrentFrame()).toEqual(currentFrame)
    })

    it('can start the next frame', function () {
      currentFrame.addBowl(5)
      game.startNextFrame()
      expect(game.getCurrentFrame()).not.toEqual(currentFrame)
    })
  })

  describe ('Finishing a game', function() {
    beforeEach(function () {
      for(i = 0; i < 8; i++) {
        game.getFrames().push(frame)
      }
    })

    it('should not finish when less than 10 frames are completed', function () {
      expect(game.isFinished()).not.toEqual(true)
    })

    it('should finish when all 10 frames are completed', function () {
      game.getFrames().push(frame)
      expect(game.isFinished()).toEqual(true)
    })
  })
})
