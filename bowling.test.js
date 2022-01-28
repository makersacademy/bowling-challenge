const Bowling = require('./bowling')

describe('Bowling', () => {

  beforeEach(() => {
    game = new Bowling;
  });

  describe('calculateScore', () => {

    it('can score a gutter game', () => {
      for(let i = 0; i < 20; i ++) {
        game.roll(0);
      }
      expect(game.calculateScore()).toBe(0)
    })
  })
  

})