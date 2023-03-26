const Game = require('./Game');

describe('Game', () => {  
  describe('roll', () => {
    it ('adds the number of pins knocked down to the rolls array', () => {
      const newGame = new Game;
      newGame.roll(5);
      expect(newGame.rolls).toEqual([5]);
    });
  });

  describe('score', () => {
    it('scores a gutter game', () => {
      const newGame = new Game();
      for (let i = 0; i < 20; i++) {
        newGame.roll(0);
      }
      expect(newGame.score()).toEqual(0);
    });
  });
})

