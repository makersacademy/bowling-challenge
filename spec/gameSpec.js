describe('Game Scorecard', function() {

  var game

  beforeEach(function() {
    game = new Game()
  })

  it('checks that a game is created', function() {
    expect(game instanceof Game).toBe(true)
  })

  it('rolls a gutter game', function() {
    rollMany(0, 20)
      // game.roll(0)
    expect(game.score()).toBe(0)
  })

  it('can roll a game of ones', function() {
    rollMany(1, 20)
      // game.roll(1)
    expect(game.score()).toBe(20)
  })

  var rollMany = function (pins, rolls) {
    for (var i = 0; i < rolls; i++)
    game.roll(pins)
  }

  // it('rolls a perfect game', function() {
  //   for(var i = 0; i < 10; i++) {
  //     game.strike()
  //   }
  //   expect(game.score()).toBe(300)
  // })
})
