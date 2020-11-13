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

    it('errors if maximum rolls (20) are exceeded', ()=> {
      for(let i = 0; i < 20; i++) {
        game.roll(2)
      }
      expect(()=> {
        game.roll(2)
      }).toThrowError('Game is complete')
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