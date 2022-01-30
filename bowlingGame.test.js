const BowlingGame = require('./bowlingGame');

describe('bowlingGame', () => {
    it('gutter game of zeros returns zero', () => {
      const game = new BowlingGame();
      for(let i=0; i<10; i++){
          game.roll(0)
      }

      expect(game.score()).toEqual(0)
    });
}); 