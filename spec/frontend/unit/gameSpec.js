describe('Game', () => {
  let game

  beforeEach(() => {
    game = new Game()
  })

  describe('#roll', ()=> {
    it('records the score from a roll', () => {
      game.roll(2)
      expect(game.score()).toEqual(2)
    })
  })

  describe('#total', ()=> {
    it('returns to sum of all recorded scores', ()=> {
      for(let i = 0; i < 5; i++) {
        game.roll(i)
      }
      expect(game.score()).toEqual(10)
    })
  })
})