const Bowling = require('./bowling.js');

const rollMultiple = (pins, rolls) => {
  for (let i = 0; i < rolls; i++) {
    game.roll(pins);
  }
} 

let game;

beforeEach(() => {
  game = new Bowling();
});

describe('Bowling', () => {
  it('can roll a gutter game', () => {
    rollMultiple(0, 20)
    expect(game.score()).toEqual(0);
  });

  it('can roll 1 every time', () => {
    rollMultiple(1, 20);
    expect(game.score()).toEqual(20);
  });

  it('can roll a spare', () => {
    game.roll(5);
    game.roll(5);
    game.roll(7);
    rollMultiple(0, 17);
    expect(game.score()).toEqual(24);
  });

  it('can roll a strike', () => {
    game.roll(10);
    game.roll(5);
    game.roll(3);
    rollMultiple(0, 17);
    expect(game.score()).toEqual(26);
  });

  it('can roll a perfect game', () => {
    rollMultiple(10, 12);
    expect(game.score()).toEqual(300);
  });

});

