const BowlingGame = require('../lib/bowlingGame')

let bowlingGame;
beforeEach(() => {
  bowlingGame = new BowlingGame()
})

describe('bowlingGame', () => {
  it("can create and instance of bowlingGame", () => {
    expect(bowlingGame).toBeInstanceOf(BowlingGame)
  })

  it('can play gutter game', () => {
    for(i = 0; i < 20; i++) {
      bowlingGame.roll(0)
    }
    expect(bowlingGame.getScore()).toBe(0)
  })

  it('can play game of ones', () => {
    for(i = 0; i < 20; i++) {
      bowlingGame.roll(1)
    }
    expect(bowlingGame.getScore()).toBe(20)
  })

  it("can roll a spare", () => {
    bowlingGame.roll(5);
    bowlingGame.roll(5);
    bowlingGame.roll(5);
    for(i = 0; i < 17; i++) {
      bowlingGame.roll(0)
    }
    expect(bowlingGame.getScore()).toBe(20)
  })

  it("can roll a strike", () => {
    bowlingGame.roll(10);
    bowlingGame.roll(5);
    bowlingGame.roll(3);
    for(i = 0; i < 16; i++) {
      bowlingGame.roll(0)
    }
    expect(bowlingGame.getScore()).toBe(26)
  })
})