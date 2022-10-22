const Game = require('./game')
const Scoreboard = require('./scoreboard')

describe('Game', () => {
  let game = new Game
  describe('scoresTotal()', () => {
    it('initially returns start score of 0', () => {
      expect(game.scoresTotal()).toEqual(0)
    })
  })

  describe('scoreboard()', () => {
    it('initially returns empty scoreboard', () => {
      const scoreboard = new Scoreboard
      expect(game.getScoreboard()).toEqual(scoreboard)
    })
  })

  describe('play()', () => {
    const nineFrameResultsDouble = [[1, 4], [4, 5], [6, 4], [5, 5], [10, 0], [0, 1], [7, 3], [6, 4], [10, 0]]
    const tenFrameResultsDouble = [[1, 4], [4, 5], [6, 4], [5, 5], [10, 0], [0, 1], [7, 3], [6, 4], [10, 0], [2, 8, 6]]
    const tenFrameResultsDouble2 = [[5, 5], [4, 5], [8, 2], [10, 0], [0, 10], [10, 0], [6, 2], [10, 0], [4, 6], [10, 10, 0]]
    
    it('creates and adds frames', () => {
      game.play(nineFrameResultsDouble)
      expect(game.getScoreboard().allFrames().length).toEqual(9)
    })

    it('returns accurate score total for 9 frames', () => {
      let game = new Game
      game.play(nineFrameResultsDouble)
      expect(game.scoresTotal()).toEqual(107)
    })

    it('returns accurate score total for 10 frames', () => {
      let game = new Game
      game.play(tenFrameResultsDouble)
      expect(game.scoresTotal()).toEqual(133)

      let game2 = new Game
      game2.play(tenFrameResultsDouble2)
      expect(game2.scoresTotal()).toEqual(169)
    })
    
  })

  describe('gutterGame()', () => {
    it('returns true if no pins are hit', () => {
      const gutterGameDouble = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0, 0]]

      let game = new Game
      game.play(gutterGameDouble)
      expect(game.gutterGame()).toEqual(true)
    })
  })

  describe('perfectGame()', () => {
    it('returns true if all strikes', () => {
      const perfectGameDouble = [[10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]]

      let game = new Game
      game.play(perfectGameDouble)
      expect(game.perfectGame()).toEqual(true)
    })
  })

})