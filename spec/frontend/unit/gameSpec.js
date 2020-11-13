describe('Game', () => {
  describe('#roll', () => {
    it('records the score from a roll', () => {
      game.roll(2)
      expect(game.score()).toEqual(2)
    })
  })
})