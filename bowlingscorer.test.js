const BowlingScorer = require('./bowlingscorer')

describe('BowlingScorer', () => {

  let game;

  beforeEach(function () {
    game = new BowlingScorer()
  });

  test('it recognises a gutter game', () => {
    for (let i = 1 ; i <= 20 ; i++) {
      game.enterScore(0)
    }
    expect(game.score()).toEqual(0)
  })

  test('it recognises a One-er', () => {
    for (let i = 1 ; i <= 20 ; i++) {
      game.enterScore(1)
    }
    expect(game.score()).toEqual(20)
  })

  test('it recognises a spare then all Zeros, SPARE LOGIC TEST', () => { 
    game.enterScore(5)
    game.enterScore(5)
    game.enterScore(5)
    for (let i = 1 ; i <= 17 ; i++) {
      game.enterScore(0)
    }
    console.log(game.scorecard)
    expect(game.score()).toEqual(20)
  })

  test('it recognises a strike, a few ones, then all zeros, STRIKE LOGIC TEST', () => {
    game.enterScore(10)
    game.enterScore(1)
    game.enterScore(1)
    for (let i = 1 ; i <= 17 ; i++) {
      game.enterScore(0)
    }
    expect(game.score()).toEqual(14)
  })
  test('it recognises a perfect game', () => {
    for (let i = 1 ; i <= 12 ; i++) {
      game.enterScore(10)
    }
    console.log(game.score())
    expect(game.score()).toEqual(300)
  })

  test('it recognises the example game given, ./images/example_ten_pin_scoring.png', () => {
    //frame 1
    game.enterScore(1)
    game.enterScore(4)
    //frame 2
    game.enterScore(4)
    game.enterScore(5)
    //frame 3
    game.enterScore(6)
    game.enterScore(4)
    //frame 4
    game.enterScore(5)
    game.enterScore(5)
    //frame 5
    game.enterScore(10)
    //frame 6
    game.enterScore(0)
    game.enterScore(1)
    //frame 7 
    game.enterScore(7)
    game.enterScore(3)
    //frame 8
    game.enterScore(6)
    game.enterScore(4)
    //frame 9
    game.enterScore(10)
    //frame 10
    game.enterScore(2)
    game.enterScore(8)
    game.enterScore(6)
    expect(game.score()).toEqual(133)
  })
})