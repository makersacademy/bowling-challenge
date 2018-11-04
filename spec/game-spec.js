describe ('Game', function () {
  var game
  var frame

  beforeEach(function () {
    game = new Game ()
    frame = jasmine.createSpyObj('frame', ['getScore'])
    secondFrame = jasmine.createSpyObj('frame', ['getScore'])
  })

  describe ('A bowling game', function () {
    it('can store a list of frames', function () {
      expect(game.getFrames()).toEqual([])
    })

    it('should have a current score', function () {
      expect(game.getCurrentScore()).toEqual(0)
    })

    it('should start at frame 1', function () {
      expect(game.getCurrentFrame()).toEqual(1)
    })

    it('can start the next frame', function () {
      game.startNextFrame()
      expect(game.getCurrentFrame()).toEqual(2)
    })
  })

  describe ('Finishing a game', function() {
    beforeEach(function () {
      for(i = 0; i < 9; i++) {
        game.getFrames().push(frame)
      }
    })

    it('should not finish when less than 10 frames are completed', function () {
      expect(game.isFinished()).not.toEqual(true)
    })

    it('should finish when all 10 frames are completed', function () {
      game.getFrames().push(secondFrame)
      console.log(game.getFrames().length)
      expect(game.isFinished()).toEqual(true)
    })
  })
})
