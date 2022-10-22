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
    
    it('creates and adds frames', () => {
      game.play(nineFrameResultsDouble)
      expect(game.getScoreboard().allFrames().length).toEqual(9)
    })

    it('returns accurate score total for 9 frames', () => {
      let game = new Game
      game.play(nineFrameResultsDouble)
      expect(game.scoresTotal()).toEqual(107)
    })

    xit('returns accurate score total for 10 frames', () => {
      let game = new Game
      game.play(tenFrameResultsDouble)
      expect(game.scoresTotal()).toEqual(133)
    })

    xit('creates new frame with content', () => {
      game.play()
      result = game.getScoreboard().allFrames()[0].frameResult()
      expect(result).toEqual([1, 4])
    })

    xit('creates 9 frames', () => {
      let game = new Game
      game.play()
      expect(game.getScoreboard().allFrames().length).toEqual(9)
    })

    xit('creates 9 frames with scores', () => {
      let game = new Game
      game.play()
      expect(game.scoresTotal()).toEqual(117)
    })
  })

})