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

    it('returns the sum of al rolls for a game without strikes or spares', () => {
      const newGame = new Game();
      for (let i = 0; i < 20; i++) {
        newGame.roll(4);
      }
      expect(newGame.score()).toEqual(80);
    })
  });

    it('Correctly calculates a spare', () => {
      const newGame = new Game;
      newGame.roll(5);
      newGame.roll(5);
      newGame.roll(3);
      for (let i = 0; i < 17; i++) {
        newGame.roll(0);
      }
      expect(newGame.score()).toEqual(16);
    })

    it('Correctly calculates a strike', () => {
      const newGame = new Game;
      newGame.roll(10);
      newGame.roll(3);
      newGame.roll(4);
      for (let i = 0; i < 16; i++) {
        newGame.roll(0);
      }
      expect(newGame.score()).toEqual(24);
    })

    it('Correctly calculates a perfect game', () => {
      const newGame = new Game;
      for (let i = 0; i < 12; i++) {
        newGame.roll(10);
      }
      expect(newGame.score()).toEqual(300);
    })

    it('Correctly calculates a perfect game', () => {
      const newGame = new Game;
      for (let i = 0; i < 21; i++) {
        newGame.roll(5);
      }
      expect(newGame.score()).toEqual(150);
    })

    it('when game has a mix of strikes, spares, and open frames', () => {
      const newGame = new Game;
      for (let i = 0; i < 21; i++) {
        newGame.roll(1);
        newGame.roll(4);
        newGame.roll(4);
        newGame.roll(5);
        newGame.roll(6);
        newGame.roll(4);
        newGame.roll(5);
        newGame.roll(5);
        newGame.roll(10);
        newGame.roll(0);
        newGame.roll(1);
        newGame.roll(7);
        newGame.roll(3);
        newGame.roll(6);
        newGame.roll(4);
        newGame.roll(10);
        newGame.roll(2);
        newGame.roll(8);
        newGame.roll(6);
      }
      expect(newGame.score()).toEqual(133);
    })

  describe('Error checking', () => {
    it('Raises an error if the number of pins is invalid', () => {
      const newGame = new Game;
      expect(() => {
        newGame.roll(-1);
      }).toThrow("Invalid number of pins");
    })
  })
})
