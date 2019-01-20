describe('Game Scorecard', function() {

  var game

  beforeEach(function() {
    game = new Game()
  })

  it('checks that a game is created', function() {
    expect(game instanceof Game).toBe(true)
  })

  it('rolls a gutter game', function() {
    for(var i = 0; i < 20; i++) {
      game.roll(0)
    }
    expect(game.score()).toBe(0)
  })
})
