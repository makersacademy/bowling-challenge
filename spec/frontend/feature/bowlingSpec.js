describe('bowling', () => {
  let game
  let i

  beforeEach(() => {
    game = new Game()
  })

  it('records rolls and provides a total score', ()=> {
    for(i = 0; i < 20; i++) {
      game.roll(2)
    }
    expect(game.getScore()).toEqual(40)
  })

  it('adds scoring bonuses for spares', ()=> {
    for(i = 0; i < 21; i++) {
      game.roll(5)
    }
    expect(game.getScore()).toEqual(150)
  })

  it('adds scoring bonuses for strikes', ()=> {
    for(i = 0; i < 12; i++) {
      game.roll(10)
    }
    expect(game.getScore()).toEqual(300)
  })
})