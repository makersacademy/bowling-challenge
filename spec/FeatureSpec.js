describe('Example rolls', function () {
  var game

  if (typeof (require) !== 'undefined') {
    Game = require('../src/Game')
  }

  beforeEach(function () {
    game = new Game ()
  })

  describe('Gutterballs: 19 * 0', function () {
    it('Game is incomplete with score of 0', function () {
      rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0]
      rolls.forEach(function(pins) {
        game.roll(pins)
      })
      expect(game.isComplete()).toBe(false)
      expect(game.score()).toEqual(0)
    })
  })

  describe('Gutterballs: 20 * 0', function () {
    it('Game is complete with score of 0', function () {
      rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      rolls.forEach(function(pins) {
        game.roll(pins)
      })
      expect(game.isComplete()).toBe(true)
      expect(game.score()).toEqual(0)
    })
  })

  describe('10, then 18 * 0', function () {
    it('Game is complete with score of 10', function () {
      rolls = [10, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0]
      rolls.forEach(function(pins) {
        game.roll(pins)
      })
      expect(game.isComplete()).toBe(true)
      expect(game.score()).toEqual(10)
    })
  })

  describe('10, then [1, 1], then 16 * 0', function () {
    it('Game is complete with score of 14', function () {
      rolls = [10, 1, 1, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0]
      rolls.forEach(function(pins) {
        game.roll(pins)
      })
      expect(game.isComplete()).toBe(true)
      expect(game.score()).toEqual(14)
    })
  })

  describe('[5, 5], then [2, 1], then 16 * 0', function () {
    it('Game is complete with score of 14', function () {
      rolls = [5, 5, 2, 1, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      rolls.forEach(function(pins) {
        game.roll(pins)
      })
      expect(game.isComplete()).toBe(true)
      expect(game.score()).toEqual(15)
    })
  })

  describe('Perfect game', function () {
    it('Game is complete with score of 300', function () {
      rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
      rolls.forEach(function(pins) {
        game.roll(pins)
      })
      expect(game.isComplete()).toBe(true)
      expect(game.score()).toEqual(300)
    })
  })

  describe('Perfect game without the last ball', function () {
    it('Game is incomplete with score of 270', function () {
      rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
      rolls.forEach(function(pins) {
        game.roll(pins)
      })
      expect(game.isComplete()).toBe(false)
      expect(game.score()).toEqual(270)
    })
  })

  describe('Example from the instructions', function () {
    it('Game is complete with a score of 133', function () {
      rolls = [1, 4, 4, 5, 6, 4, 5, 5, 10,
               0, 1, 7, 3, 6, 4, 10, 2, 8, 6]
      rolls.forEach(function(pins) {
        game.roll(pins)
      })
      expect(game.isComplete()).toBe(true)
      expect(game.score()).toEqual(133)
    })
  })

  describe('202 game', function () {
    it('Game is complete with a score of 202', function () {
      rolls = [10, 8, 2, 9, 1, 8, 0, 10, 10, 9,
               1, 9, 1, 10, 10, 9, 1]
      rolls.forEach(function(pins) {
        game.roll(pins)
      })
      expect(game.isComplete()).toBe(true)
      expect(game.score()).toEqual(202)
    })
  })

  describe('164 game', function () {
    it('Game is complete with a score of 164', function () {
      rolls = [7, 3, 10, 10, 8, 1, 9, 1, 8,
               1, 10, 9, 1, 8, 2, 6, 1]
      rolls.forEach(function(pins) {
        game.roll(pins)
      })
      expect(game.isComplete()).toBe(true)
      expect(game.score()).toEqual(164)
    })
  })

  describe('276 game', function () {
    it('Game is complete with a score of 276', function () {
      rolls = [10, 10, 10, 10, 10, 10, 10, 10, 6,
               4, 10, 10, 10]
      rolls.forEach(function(pins) {
        game.roll(pins)
      })
      expect(game.isComplete()).toBe(true)
      expect(game.score()).toEqual(276)
    })
  })

  describe('All zeros until the final frame', function () {
    beforeEach(function () {
      for (var i = 0; i < 18; i ++) {
        game.roll(0)
      }
    })

    describe ('Strikes', function () {
      describe('A strike in the final frame', function () {
        it('Game is incomplete with a score of 0', function () {
          game.roll(10)
          expect(game.isComplete()).toBe(false)
          expect(game.score()).toEqual(0)
        })
      })
      
      describe('Two strikes in the final frame', function () {
        it('Game is incomplete with a score of 0', function () {
          rolls = [10, 10]
          rolls.forEach(function(pins) {
            game.roll(pins)
          })
          expect(game.isComplete()).toBe(false)
          expect(game.score()).toEqual(0)
        })
      })
      
      describe('Three strikes in the final frame', function () {
        it('Game is complete with a score of 30', function () {
          rolls = [10, 10, 10]
          rolls.forEach(function(pins) {
            game.roll(pins)
          })
          expect(game.isComplete()).toBe(true)
          expect(game.score()).toEqual(30)
        })
      })
    })

    describe ('Spares', function () {
      describe('A spare in the final frame', function () {
        it('Game is incomplete with a score of 0', function () {
          game.roll(2)
          game.roll(8)
          expect(game.isComplete()).toBe(false)
          expect(game.score()).toEqual(0)
        })
      })
      
      describe('A spare in the final frame follows by 1', function () {
        it('Game is complete with a score of 11', function () {
          rolls = [2, 8, 1]
          rolls.forEach(function(pins) {
            game.roll(pins)
          })
          expect(game.isComplete()).toBe(true)
          expect(game.score()).toEqual(11)
        })
      })
    })

    describe ('Basic rolls', function () {
      describe('One basic roll', function () {
        it('Game is incomplete with a score of 0', function () {
          game.roll(2)
          expect(game.isComplete()).toBe(false)
          expect(game.score()).toEqual(0)
        })
      })

      describe('2 followed by 1', function () {
        it('Game is complete with a score of 3', function () {
          game.roll(2)
          game.roll(1)
          expect(game.isComplete()).toBe(true)
          expect(game.score()).toEqual(3)
        })
      })
    })
  })
})
