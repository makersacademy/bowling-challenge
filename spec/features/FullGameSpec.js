'use strict'

describe('Feature testing a full game', () => {
  it('runs correctly when game is a gutter game', () => {
    const game = new Game()
    new Array(20).fill(0).forEach(roll => game.addRoll(roll))

    expect(game.totalScore()).toBe(0)
    expect(game.runningTotal()).toEqual(
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    )
  })

  it('runs correctly when every frame is a spare', () => {
    const game = new Game()
    new Array(21).fill(5).forEach(roll => game.addRoll(roll))

    expect(game.totalScore()).toBe(150)
    expect(game.runningTotal()).toEqual(
      [15, 30, 45, 60, 75, 90, 105, 120, 135, 150]
    )
  })

  it('runs correctly when game is a perfect game', () => {
    const game = new Game()
    new Array(12).fill(10).forEach(roll => game.addRoll(roll))

    expect(game.totalScore()).toBe(300)
    expect(game.runningTotal()).toEqual(
      [30, 60, 90, 120, 150, 180, 210, 240, 270, 300]
    )
  })

  it('runs correctly for a test game with different roll values', () => {
    const game = new Game()
    const testGame = [
      1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6
    ]
    testGame.forEach(roll => game.addRoll(roll))

    expect(game.totalScore()).toBe(133)
    expect(game.runningTotal()).toEqual(
      [5, 14, 29, 49, 60, 61, 77, 97, 117, 133]
    )
  })
})
