Game = require ('../lib/Game')

describe('Game', function () {
  var game

  beforeEach(function () {
    game = new Game()
  })

  describe('#roll', function () {
    it('it stores the roll', function () {
      game.roll(0)
      expect(game.lastRoll()).toBe(0)
    })
  })

  describe('#complete', function () {
    describe('after 20 gutterballs', function () {
      it('returns true', function () {
        for (var i = 0; i < 20; i ++) {
          game.roll(0)
        }
        expect(game.complete()).toBe(true)
      })
    })

    describe('after 19 gutterballs', function () {
      it('returns false', function () {
        for (var i = 0; i < 19; i ++) {
          game.roll(0)
        }
        expect(game.complete()).toBe(false)
      })
    })

    describe('after 1 strike and 18 gutterballs', function () {
      it('returns true', function () {
        game.roll(10)
        for (var i = 0; i < 18; i ++) {
          game.roll(0)
        }
        expect(game.complete()).toBe(true)
      })
    })

    describe('after 9 strikes and 2 gutterballs', function () {
      it('returns true', function () {
        for (var i = 0; i < 9; i ++) {
          game.roll(10)
        }
        game.roll(0)
        game.roll(0)
        expect(game.complete()).toBe(true)
      })
    })
  })

  describe('#score', function () {
    describe('after 20 gutterballs', function () {
      it('returns zero', function () {
        for (var i = 0; i < 20; i ++) {
          game.roll(0)
        }
        expect(game.score()).toBe(0)
      })
    })

    describe('after one strike and 18 gutterballs', function () {
      it('returns 10', function () {
        game.roll(10)
        for (var i = 0; i < 18; i ++) {
          game.roll(0)
        }
        expect(game.score()).toBe(10)
      })
    })
  })
})
