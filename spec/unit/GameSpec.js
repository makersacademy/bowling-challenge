'use strict'
/* global  Game */

describe('Bowling', function () {
  var game

  beforeEach(function () {
    game = new Game()
  })

  describe('#roll', function () {
    it('should be able to keep track of rolls', function () {
      game.roll(5)
      expect(game.rolls).toContain(5)
    })
  })

  describe('#countFrame', function () {
    it('keeps count of number of frames', function () {
      game.roll(4)
      game.roll(4)
      game.roll(4)
      game.roll(4)
      game.roll(4)
      game.roll(4)
      expect(game.frameCount).toEqual(3)
    })
  })

  describe('Score', function () {
    describe('should be able to call score at any time', function () {
      it('after one roll', function () {
        game.roll(5)
        expect(game.score()).toEqual(5)
      })

      it('after a strike', function () {
        game.roll(10)
        expect(game.score()).toEqual(10)
      })

      it('after a spare', function () {
        game.roll(5)
        game.roll(5)
        expect(game.score()).toEqual(10)
      })
    })
  })

  describe('Gutter game', function () {
    it('all rolls are 0,should score 0', function () {
      for (var i = 0; i < 20; i++) {
        game.roll(0)
      }
      expect(game.score()).toEqual(0)
    })
  })

  describe('Score if all rolls hit only 1 pin', function () {
    it('should score 20', function () {
      for (var i = 0; i < 20; i++) {
        game.roll(1)
      }
      expect(game.score()).toEqual(20)
    })
  })

  describe('#isSpare', function () {
    it('returns true if spare', function () {
      game.roll(5)
      game.roll(5)
      game.roll(5)
      expect(game.isSpare(0)).toEqual(true)
    })

    it('returns false if not spare', function () {
      game.roll(5)
      game.roll(3)
      game.roll(1)
      expect(game.isSpare(0)).toEqual(false)
    })
  })

  describe('Score if only a spare', function () {
    it('should score 20 if spare in frame1 and roll1 of frame2 hits 5 pins', function () {
      game.roll(5)
      game.roll(5)
      game.roll(5)
      expect(game.score()).toEqual(20)
    })
  })

  describe('#isStrike', function () {
    it('returns true if strike', function () {
      game.roll(10)
      game.roll(2)
      game.roll(3)
      expect(game.isStrike(0)).toEqual(true)
    })

    it('returns false if not strike', function () {
      game.roll(4)
      game.roll(3)
      game.roll(5)
      expect(game.isStrike(0)).toEqual(false)
    })
  })

  describe('Score if only a strike', function () {
    it('should score 20 if strike followed by 2 rolls: 2 and 3', function () {
      game.roll(10)
      game.roll(2)
      game.roll(3)
      expect(game.score()).toEqual(20)
    })
  })

  describe('Perfect game', function () {
    it('should score 300 if 12 strikes in a row', function () {
      for (var i = 0; i < 12; i++) {
        game.roll(10)
      }
      expect(game.score()).toEqual(300)
    })
  })

  describe('#hasBonus', function () {
    it('should return true when spare in frame 10', function () {
      for (var i = 0; i < 18; i++) {
        game.roll(3)
      }
      game.roll(7)
      game.roll(3)
      expect(game.hasBonus()).toEqual(true)
    })

    it('should return false if no spare or strike in frame10', function () {
      for (var i = 0; i < 20; i++) {
        game.roll(4)
      }
      expect(game.hasBonus()).toEqual(false)
    })
  })

  describe('#resetGame', function () {
    it('should reset frame count and rolls to start new game', function () {
      game.roll(3)
      game.roll(4)
      game.roll(5)
      game.roll(2)
      game.resetGame()
      expect(game.frameCount).toEqual(0)
      expect(game.rolls).toEqual([])
    })
  })

  describe('game with all score variations', function () {
    it('should score 110', function () {
      game.roll(7)
      game.roll(2)
      game.roll(6)
      game.roll(1)
      game.roll(5)
      game.roll(5)
      game.roll(3)
      game.roll(4)
      game.roll(5)
      game.roll(5)
      game.roll(10)
      game.roll(5)
      game.roll(3)
      game.roll(5)
      game.roll(0)
      game.roll(6)
      game.roll(2)
      game.roll(7)
      game.roll(3)
      game.roll(5)
      expect(game.score()).toEqual(110)
    })
  })
})
