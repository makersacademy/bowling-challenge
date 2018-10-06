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
