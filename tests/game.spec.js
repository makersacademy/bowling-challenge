const Game = require('../lib/game');

const doubleBonusFrame = {
  getFirst: () => 10,
  getSecond: () => 3,
  getThird: () => 4,
  getTotal: () => 17,
  isStrike: () => true,
  isSpare: () => false,
};
const doubleStrikeFrame = {
  getFirst: () => 10,
  getSecond: () => 0,
  getThird: () => 0,
  getTotal: () => 10,
  isStrike: () => true,
  isSpare: () => false,
};
const doubleSpareFrame = {
  getFirst: () => 5,
  getSecond: () => 5,
  getThird: () => 0,
  getTotal: () => 10,
  isStrike: () => false,
  isSpare: () => true,
};
const doubleOpenFrame = {
  getFirst: () => 3,
  getSecond: () => 4,
  getThird: () => 0,
  getTotal: () => 7,
  isStrike: () => false,
  isSpare: () => false,
};

describe('Game', () => {
  it('should add a frame to the scorecard', () => {
    const game = new Game();
    game.add(doubleOpenFrame);
    expect(game.scorecard).toEqual([doubleOpenFrame]);
  });
  it('should calculate the total without bonuses', () => {
    const game = new Game();
    let times = 10;
    for (let i = 0; i < times; i++) {
      game.add(doubleOpenFrame);
    }
    expect(game.faceValue()).toEqual(70);
  });
  it('should calculate the total bonuses of spares', () => {
    const game = new Game();
    let times = 5;
    for (let i = 0; i < times; i++) {
      game.add(doubleSpareFrame);
      game.add(doubleOpenFrame);
    }
    expect(game.calculateSpares()).toEqual(15);
  });
  it('should calculate the total bonuses of strikes preceding open frames', () => {
    const game = new Game();
    let times = 5;
    for (let i = 0; i < times; i++) {
      game.add(doubleStrikeFrame);
      game.add(doubleOpenFrame);
    }
    expect(game.calculateStrikes()).toEqual(35);
  });
  it('should calculate the total bonuses of strikes that follow strikes', () => {
    const game = new Game();
    let times = 2;
    for (let i = 0; i < times; i++) {
      game.add(doubleStrikeFrame);
      game.add(doubleStrikeFrame);
      game.add(doubleOpenFrame);
      game.add(doubleOpenFrame);
      game.add(doubleOpenFrame);
    }
    expect(game.calculateStrikes()).toEqual(40);
  });
});
