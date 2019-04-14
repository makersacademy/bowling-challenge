describe('Game', function () {
  var game, scorer

  if (typeof (require) !== 'undefined') {
    Game = require('../src/Game')
  }

  beforeEach(function () {
    scorer = {
      addRoll: function () {},
      total: function () { return 42 }
    }
    game = new Game (scorer)
  })

  describe('.roll()', function () {
    it('It adds the roll to the scorer', function () {
      spyOn(scorer, 'addRoll')
      game.roll(5)
      expect(scorer.addRoll).toHaveBeenCalledWith(5)
    })
  })

  describe('.score()', function () {
    it('It returns the total from the scorer', function () {
      expect(game.score()).toEqual(42)
    })
  })

  describe('.isComplete()', function () {
    it('It returns true if 10 frames are scored', function () {
      scorer.runningTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      game = new Game (scorer)
      expect(game.isComplete()).toBe(true)
    })

    it('It returns false if less than 10 frames are scored', function () {
      scorer.runningTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0]
      game = new Game (scorer)
      expect(game.isComplete()).toBe(false)
    })
  })
})
