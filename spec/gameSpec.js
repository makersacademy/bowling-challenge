var Game = require('../src/game')

describe('Gutter game', function () {
  var game = new Game()

  it('Scores Zero on a Gutter game', function () {
    for (var i = 0; i < 20; i++) {
      game.roll(0)
    }
    expect(game.score).toEqual(0)
  })
})

describe('#makeNewFrame', function () {
  var game = new Game

  it('Makes a 1st frame for new Game', function () {
    game.roll(4)
    expect(game.frames.length).toEqual(1)
  })
})
