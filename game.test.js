const Game = require('./game')
const Scorecard = require('./scorecard')

describe('Game', () => {
  let game = new Game
  describe('scoresTotal()', () => {
    it('initially returns start score of 0', () => {
      expect(game.scoresTotal()).toEqual(0)
    })
  })

  describe('scorecard()', () => {
    it('initially returns empty scorecard', () => {
      const scorecard = new Scorecard
      expect(game.getScorecard()).toEqual(scorecard)
    })
  })

  describe('run()', () => {
    const nineGameResultsDouble = [[1, 4], [4, 5], [6, 4], [5, 5], [10, 0], [0, 1], [7, 3], [6, 4], [10, 0]]
    const tenGameResultsDouble = [[1, 4], [4, 5], [6, 4], [5, 5], [10, 0], [0, 1], [7, 3], [6, 4], [10, 0], [2, 8, 6]]
    const tenGameResultsDouble2 = [[5, 5], [4, 5], [8, 2], [10, 0], [0, 10], [10, 0], [6, 2], [10, 0], [4, 6], [10, 10, 0]]
    
    it('creates and adds frames', () => {
      game.run(nineGameResultsDouble)
      expect(game.getScorecard().allFrames().length).toEqual(9)
    })

    it('returns accurate score total for 9 frames', () => {
      let game = new Game
      game.run(nineGameResultsDouble)
      expect(game.scoresTotal()).toEqual(107)
    })

    it('returns accurate score total for 10 frames', () => {
      let game = new Game
      game.run(tenGameResultsDouble)
      expect(game.scoresTotal()).toEqual(133)

      let game2 = new Game
      game2.run(tenGameResultsDouble2)
      expect(game2.scoresTotal()).toEqual(169)
    })
    
  })

  describe('checkForGutterGame()', () => {
    it('returns true if no pins are hit', () => {
      const gutterGameDouble = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0, 0]]

      let game = new Game
      game.run(gutterGameDouble)
      expect(game.checkForGutterGame()).toEqual(true)
    })
  })

  describe('checkForPerfectGame()', () => {
    it('returns true if all strikes', () => {
      const perfectGameDouble = [[10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]]

      let game = new Game
      game.run(perfectGameDouble)
      expect(game.checkForPerfectGame()).toEqual(true)
    })
  })

})