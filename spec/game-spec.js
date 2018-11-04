describe ('Game', function () {
  var game
  var frame
  var currentFrame

  beforeEach(function () {
    game = new Game()
    currentFrame = game.getCurrentFrame()
    frame = jasmine.createSpyObj('frame', ['getScore', 'addBowl', 'isFinished'])
  })

  describe ('A bowling game', function () {
    it('can store a list of frames', function () {
      expect(game.getFrames()).toEqual([currentFrame])
    })

    it('should have a current score', function () {
      expect(game.getCurrentScore()).toEqual(0)
    })

    it('should start with a frame', function () {
      expect(game.getCurrentFrame()).toEqual(currentFrame)
    })

    it('can start the next frame', function () {
      spyOn(currentFrame, 'getScore').and.returnValue(5)
      game.startNextFrame()
      expect(game.getCurrentFrame()).not.toEqual(currentFrame)
    })
  })

  describe ('Calculating score', function () {
    it('will return 10 when two frames have 5 points each', function () {
      spyOn(currentFrame, 'getScore').and.returnValue(5)
      game.startNextFrame()
      var newCurrentFrame = game.getCurrentFrame()
      spyOn(newCurrentFrame, 'getScore').and.returnValue(5)
      expect(game.getCurrentScore()).toEqual(10)
    })
  })

  describe('Adding a bowl', function () {
    it('updates current score by the correct number of pins', function () {
      game.addBowl(5)
      expect(game.getCurrentScore()).toEqual(5)
    })

    it('starts next frame if current frame is finished', function () {
      game.addBowl(5)
      game.addBowl(3)
      expect(game.getCurrentFrame()).not.toEqual(currentFrame)
    })

    it('throws an error if the game is finished', function () {
      var i = 0
      for(i = 0; i < 9; i++) {
        game.getFrames().push(frame)
      }
      frame.isFinished.and.returnValue(true)
      expect(function () { game.addBowl(5) }).toThrow('Game Over!')
    })
  })

  describe ('Finishing a game', function() {
    beforeEach(function () {
      var i = 0
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
