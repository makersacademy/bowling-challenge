
describe('Game', function () {
  var game
  var frame
  var firstFrame

  beforeEach(function () {
    game = new Game()
    game.startNextFrame()
    firstFrame = game.getCurrentFrame()
    frame = jasmine.createSpyObj('frame', ['getScore', 'bowl', 'isFinished'])
  })

  describe('A bowling game', function () {
    it('can store a list of frames', function () {
      expect(game.getFrames()).toEqual([firstFrame])
    })

    it('should have a current score', function () {
      expect(game.getCurrentScore()).toEqual(0)
    })

    it('should start with a frame', function () {
      expect(game.getCurrentFrame()).toEqual(firstFrame)
    })

    it('can start the next frame', function () {
      spyOn(firstFrame, 'getScore').and.returnValue(5)
      game.startNextFrame()
      expect(game.getCurrentFrame()).not.toEqual(firstFrame)
    })

    it('starts a final frame for the 10th frame', function () {
      var i = 0
      for (i = 0; i < 10; i++) {
        game.bowl(10)
      }
      expect(game.getCurrentFrame()).toEqual(jasmine.any(FinalFrame))
    })
  })

  describe('Calculating score', function () {
    it('can do basic calculations', function () {
      game.bowl(3)
      game.bowl(2)
      expect(game.getCurrentScore()).toEqual(5)
    })

    it('Can calculate a spare', function () {
      game.bowl(5)
      game.bowl(5)
      game.bowl(4)
      expect(game.getCurrentScore()).toEqual(18)
    })

    it('Can calculate perfect game', function () {
      var i = 0
      for (i = 0; i < 12; i++) {
        game.bowl(10)
      }
      expect(game.getCurrentScore()).toEqual(300)
    })

    it('Can calculate a spare game', function () {
      var i = 0
      for (i = 0; i < 21; i++) {
        game.bowl(5)
      }
      expect(game.getCurrentScore()).toEqual(150)
    })

    it('Can calculate a gutter game', function () {
      var i = 0
      for (i = 0; i < 20; i++) {
        game.bowl(0)
      }
      expect(game.getCurrentScore()).toEqual(0)
    })
  })

  describe('Adding a bowl', function () {
    it('updates current score by the correct number of pins', function () {
      game.bowl(5)
      expect(game.getCurrentScore()).toEqual(5)
    })

    it('starts next frame if current frame is finished', function () {
      game.bowl(5)
      game.bowl(3)
      game.bowl(3)
      expect(game.getCurrentFrame()).not.toEqual(firstFrame)
    })

    it('throws an error if the game is finished', function () {
      var i = 0
      for (i = 0; i < 12; i++) {
        game.bowl(10)
      }
      expect(function () { game.bowl(5) }).toThrow('Your game is over. Please press "New Game" to start over.')
    })
  })
})
