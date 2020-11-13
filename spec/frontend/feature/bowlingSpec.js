describe('bowling', () => {
  let game
  let i

  beforeEach(() => {
    game = new Game()
  })

  it('records rolls and provides a total score', () => {
    for(i = 0; i < 20; i++) {
      game.roll(2)
    }
    expect(game.score()).toEqual(40)
  })
})