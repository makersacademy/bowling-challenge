'use strict'

describe('game', function () {
  let game

  beforeEach(function () {
    game = new Game()
  })

  describe('.new', function () {
    it('create a new game with 10 frames', function () {
      game.new()
      expect(game.frameNumber()).toEqual(10)
    })
  })

  describe('.addFrame', function () {
    it('add a frame to the game', function () {
      game.addFrame()
      expect(game._frames.length).toEqual(1)
    })

    it('add 6 frames to the game', function () {
      for (let i = 0; i < 6; i++) {
        game.addFrame()
        game.currentFrame().addShot(2)
        game.currentFrame().addShot(2)
      }
      expect(game._frames.length).toEqual(6)
    })

    it('throw an error if trying to add a 11nth frame', function () {
      for (let i = 0; i < 10; i++) {
        game.addFrame()
        game.currentFrame().addShot(2)
        game.currentFrame().addShot(2)
      }
      expect(function () { game.addFrame() }).toThrowError(Error, "This game is over, can't play for ever!")
    })

  })

  describe('.frameNumber', function () {
    it('return 0 if no frames were added', function () {
      expect(game.frameNumber()).toEqual(0)
    })
    it('return 1 as the first frame', function () {
      game.addFrame()
      expect(game.frameNumber()).toEqual(1)
    })

    it('return 5 after adding 5 frames', function () {
      for (let i = 0; i < 5; i++) {
        game.addFrame()
        game.currentFrame().addShot(2)
        game.currentFrame().addShot(2)
      }
      expect(game.frameNumber()).toEqual(5)
    })
  })

  describe('.currentFrame, .previousFrame, .nextFrame', function () {
    it('return the last frame', function () {
      game.new()
      game.currentFrame().addShot(2)
      game.currentFrame().addShot(2)
      expect(game.currentFrame()).toEqual(game._frames[1])
      expect(game.previousFrame()).toEqual(game._frames[0])
      expect(game.nextFrame()).toEqual(game._frames[2])
    })

    it('return the first frame in a new game', function () {
      game.new()
      game.currentFrame().addShot(1)
      expect(game.currentFrame()).toEqual(game._frames[0])
      expect(game.previousFrame()).toEqual(undefined)
      expect(game.nextFrame()).toEqual(game._frames[1])
    })

    it('return the second frame in a new game', function () {
      game.new()
      game.currentFrame().addShot(1)
      game.currentFrame().addShot(2)
      game.currentFrame().addShot(1)
      expect(game.currentFrame()).toEqual(game._frames[1])
      expect(game.previousFrame()).toEqual(game._frames[0])
      expect(game.nextFrame()).toEqual(game._frames[2])
    })

    it('return the second frame in a new game after a strike', function () {
      game.new()
      game.currentFrame().addShot(10)
      game.currentFrame().addShot(2)
      expect(game.currentFrame()).toEqual(game._frames[1])
      expect(game.previousFrame()).toEqual(game._frames[0])
      expect(game.nextFrame()).toEqual(game._frames[2])
    })

    it('return the fifth frame after multiples strikes', function () {
      game.new()
      game.currentFrame().addShot(10)
      game.currentFrame().addShot(10)
      game.currentFrame().addShot(10)
      game.currentFrame().addShot(10)
      expect(game.currentFrame()).toEqual(game._frames[4])
      expect(game.previousFrame()).toEqual(game._frames[3])
      expect(game.nextFrame()).toEqual(game._frames[5])
    })
  })

  describe('.addPoints', function () {
    it('add the point of the first frame', function () {
      game.new()
      game.currentFrame().addShot(2)
      game.currentFrame().addShot(2)
      game.addPoints()
      expect(game.getPoints()).toEqual(4)
    })

    it('add the points of two frames', function () {
      game.new()
      game.currentFrame().addShot(1)
      game.currentFrame().addShot(8)
      game.addPoints()
      game.currentFrame().addShot(2)
      game.currentFrame().addShot(6)
      game.addPoints()
      expect(game.getPoints()).toEqual(17)
    })

    it('if spare add the points of the next first shot', function () {
      game.new()
      game.currentFrame().addShot(2)
      game.currentFrame().addShot(8)
      game.addPoints()
      game.currentFrame().addShot(2)
      game.currentFrame().addShot(6)
      game.addPoints()
      expect(game.getPoints()).toEqual(20)
    })

    it('two spares, 1 normal', function () {
      game.new()
      game.currentFrame().addShot(2)
      game.currentFrame().addShot(8)
      game.addPoints()
      game.currentFrame().addShot(4)
      game.currentFrame().addShot(6)
      game.addPoints()
      game.currentFrame().addShot(3)
      game.currentFrame().addShot(2)
      game.addPoints()
      expect(game.getPoints()).toEqual(32)
    })

    it('if strike add the points of the next frame', function () {
      game.new()
      game.currentFrame().addShot(10)
      game.addPoints()
      game.currentFrame().addShot(3)
      game.currentFrame().addShot(4)
      game.addPoints()
      game.currentFrame().addShot(0)
      game.currentFrame().addShot(0)
      game.addPoints()
      expect(game.getPoints()).toEqual(24)
    })

    it('2 strikes, 1 normal', function () {
      game.new()
      game.currentFrame().addShot(10)
      game.addPoints()
      game.currentFrame().addShot(10)
      game.addPoints()
      game.currentFrame().addShot(3)
      game.currentFrame().addShot(4)
      game.addPoints()
      game.currentFrame().addShot(0)
      game.currentFrame().addShot(0)
      game.addPoints()
      expect(game.getPoints()).toEqual(47)
    })

    it('random game', function () {
      game.new()
      game.currentFrame().addShot(2)
      game.currentFrame().addShot(5)
      game.addPoints()

      game.currentFrame().addShot(4)
      game.currentFrame().addShot(5)
      game.addPoints()

      game.currentFrame().addShot(2)
      game.currentFrame().addShot(5)
      game.addPoints()

      game.currentFrame().addShot(3)
      game.currentFrame().addShot(3)
      game.addPoints()

      game.currentFrame().addShot(10)
      game.addPoints()

      game.currentFrame().addShot(4)
      game.currentFrame().addShot(6)
      game.addPoints()

      game.currentFrame().addShot(2)
      game.currentFrame().addShot(4)
      game.addPoints()

      game.currentFrame().addShot(10)
      game.addPoints()

      game.currentFrame().addShot(0)
      game.currentFrame().addShot(0)
      game.addPoints()

      expect(game.getPoints()).toEqual(77)
    })
  })

  describe('10th frame', function () {
    it("no spare or strike don't add a third shot", function () {
      newGame()
      game.currentFrame().addShot(2)
      game.currentFrame().addShot(3)
      game.addPoints()
      expect(game.getPoints()).toEqual(5)
    })
  })

  const newGame = () => {
    game.new()
    for (let i = 0; i < 9; i++) {
      game.currentFrame().addShot(0)
      game.currentFrame().addShot(0)
      game.addPoints(0)
    }
  }
})