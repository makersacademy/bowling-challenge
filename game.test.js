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

  // 1 - Gutter Game
  it('returns 0 when player rolls Gutter Game', () => {
    for (let i = 0 ; i < 20 ; i++)  {
      game.roll(0);
    }
    expect(game.calculateScore()).toBe(0);
  });

  // 2 - All Ones
  it('returns 20 when the player rolls game of all ones', () => {
    for (let i = 0 ; i < 20 ; i++)  {
      game.roll(1);
    }
    expect(game.calculateScore()).toBe(20);
  });

  // 3 - Spare and Ones
  it('returns 29 when the player rolls one spare and the rest all ones', () => {
    game.roll(5);
    game.roll(5);
    for (let i = 0 ; i < 18 ; i++)  {
      game.roll(1);
    }
    expect(game.calculateScore()).toBe(29);
  });

  // 4 - Strike and Ones
  it('returns 30 when the player rolls one strike and the rest all ones', () => {
    game.roll(10);
    for (let i = 0 ; i < 18 ; i++)  {
      game.roll(1);
    }
    expect(game.calculateScore()).toBe(30);
  });
  
  // 5 - Perfect Game
  it('returns 300 when the player rolls 10 strikes plus 2 bonus strikes', () => {
    for (let i = 0 ; i < 12 ; i++)  {
      game.roll(10);
    }
    expect(game.calculateScore()).toBe(300);
  });

  // 6 - 10th Frame Spare 
  it('returns 29 when the player rolls a spare in the 10th frame plus 1 for bonus', () => {
    for (let i = 0 ; i < 18 ; i++)  {
      game.roll(1);
    }
    game.roll(5);
    game.roll(5);
    game.roll(1);
    expect(game.calculateScore()).toBe(29);
  });

  // 7 - 10th Frame Strike
  it('returns 29 when the player rolls one strike in the 10th frame plus 2 x 1 for bonus', () => {
    for (let i = 0 ; i < 18 ; i++)  {
      game.roll(1);
    }
    game.roll(10);
    game.roll(1);
    game.roll(1);
    expect(game.calculateScore()).toBe(30);
  });

  // Maximum Score
  it('allows a maximum score of 300', () => {
    for (let i = 0 ; i < 20 ; i++)  {
      game.roll(10);
    }
    expect(game.calculateScore()).toBe(300);
  });

  // Edge Cases to test for
    // - Maximum no of rolls 
      // - perfect game -> 12
      // - no bonuses -> 20
      // - different strike/ spare combinations
    // - only valid numbers can be entered
    // - two numbers within frame can't be > 10
});
