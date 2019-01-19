describe('Scorecard', function() {
  let game;

  beforeEach(function () {
    game = new Game()
  })

  it('a user scores 0 for a full gutter game', function () {
    for (let i = 1; i <= 20; i++) {
      game.roll(0)
    }

    expect(scoresheet.isOver).toBe(true)
    expect(scoresheet.finalScore).toEqual(0)
  })
})
