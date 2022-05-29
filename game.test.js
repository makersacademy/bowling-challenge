const Game = require('./game');

describe('game', () => {
  beforeEach(() => {
    game = new Game();
  });
  
  it('returns an array of rolls for each new game', () => {
    // game = new Game();
    game.roll(1);
    game.roll(4);
    expect(this.rolls).toEqual [1, 4];
  });

  it('returns 0 when player rolls Gutter Game', () => {
    for (let i = 0 ; i < 20 ; i++)  {
      game.roll(0);
    }
    expect(game.calculateScore()).toBe(0);
  });
}); 
