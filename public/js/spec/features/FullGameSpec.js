'use strict'

describe('Feature testing a full game', () => {
  let scoreBoard

  beforeEach(() => {
    scoreBoard = new ScoreBoard()
  })

  it('runs correctly when game is a gutter game', () => {
    const game = new Game()
    new Array(20).fill(0).forEach(roll => game.addRoll(roll))

    expect(scoreBoard.totalScore(game.frames)).toBe(0)
    expect(scoreBoard.calculateRunningTotal(game.frames)).toEqual(
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    )
  })

  it('runs correctly when every frame is a spare', () => {
    const game = new Game()
    new Array(21).fill(5).forEach(roll => game.addRoll(roll))

    expect(scoreBoard.totalScore(game.frames)).toBe(150)
    expect(scoreBoard.calculateRunningTotal(game.frames)).toEqual(
      [15, 30, 45, 60, 75, 90, 105, 120, 135, 150]
    )
  })

  it('runs correctly when game is a perfect game', () => {
    const game = new Game()
    new Array(12).fill(10).forEach(roll => game.addRoll(roll))

    expect(scoreBoard.totalScore(game.frames)).toBe(300)
    expect(scoreBoard.calculateRunningTotal(game.frames)).toEqual(
      [30, 60, 90, 120, 150, 180, 210, 240, 270, 300]
    )
  })

  it('runs correctly for example game with different roll values', () => {
    const game = new Game()
    const exampleGame = [
      1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6
    ]
    exampleGame.forEach(roll => game.addRoll(roll))

    expect(scoreBoard.totalScore(game.frames)).toBe(133)
    expect(scoreBoard.calculateRunningTotal(game.frames)).toEqual(
      [5, 14, 29, 49, 60, 61, 77, 97, 117, 133]
    )
  })

  it('runs a correct game for example game 2', () => {
    const game = new Game()
    const exampleGame2 = [
      9, 1, 0, 10, 10, 10, 6, 2, 7, 3, 8, 2, 10, 9, 0, 10, 10, 8
    ]
    exampleGame2.forEach(roll => game.addRoll(roll))

    expect(scoreBoard.totalScore(game.frames)).toBe(176)
    expect(scoreBoard.calculateRunningTotal(game.frames)).toEqual(
      [10, 30, 56, 74, 82, 100, 120, 139, 148, 176]
    )
  })
})
