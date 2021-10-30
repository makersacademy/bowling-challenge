const Bowling = require('./bowling')

describe ('Bowling', () => {
  it ('can make a new game', () => {
    const game = new Bowling();
  });

  it ('can roll a gutter game', () => {
    const game = new Bowling();
    for (let i = 0; i < 20; i++) {
      game.roll(0) 
    }
    expect(game.score()).toBe(0);
  })

  it ('can roll all 1s', () => {
    const game = new Bowling();
    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toBe(20);
  })

  it ('can roll a spare', () => {
    const game = new Bowling();
    game.roll(5);
    game.roll(5);
    game.roll(3);
    for (let i = 0; i < 18; i++) {
      game.roll(0) 
    }
    expect(game.score()).toBe(16);
  })

  it ('can roll a strike', () => {
    const game = new Bowling();
    game.roll(10);
    game.roll(3);
    game.roll(4);
    for (let i = 0; i < 17; i++) {
      game.roll(0) 
    }
    expect(game.score()).toBe(24);
  })

  it ('can roll a perfect game', () => {
    const game = new Bowling();
    for (let i = 0; i < 12; i++) {
      game.roll(10) 
    }
    expect(game.score()).toBe(300);
  })

})