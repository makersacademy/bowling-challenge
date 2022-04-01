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
    expect(game.score()).toEqual(24);
  });

});

