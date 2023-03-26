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

})
