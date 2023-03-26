const { describe } = require('jest-circus');
const Game = require('../src/game');

beforeEach(() => {
  game = new Game();
});

describe('Game', () => {
  test('adds a frame to the array', () => {
    const mockFrame = { first_roll: null, second_roll: null, score: 0 };
    game.newFrame(mockFrame);
    expect(game.frames.length).toEqual(1);
  });
});

describe('Strikes', () => {
  test('strike returns true', () => {
    const mockFrame = { first_roll: 10, second_roll: 'x', score: 10 };
    expect(game.isStrike(mockFrame)).toEqual(true);
  });

  test('spare is not a strike', () => {
    const mockFrame = { first_roll: 4, second_roll: 6, score: 10 };
    expect(game.isStrike(mockFrame)).not.toEqual(true);
  });
});

describe('Spares', () => {
  test('spare returns true', () => {
    const mockFrame = { first_roll: 4, second_roll: 6, score: 10 };
    expect(game.isSpare(mockFrame)).toEqual(true);
  });
});

describe('if first_roll exceeds 10', () => {
  test('this an error', () => {
    expect(() => {
      game.roll(11, 0);
    }).toThrow('There are only 10 pins!');
  });
});

describe('combined exceeds 10', () => {
  test('throws an error', () => {
    expect(() => {
      game.roll(6, 5);
    }).toThrow('There are only 10 pins!');
  });
});

describe('input is not a number', () => {
  test('throws an error', () => {
    expect(() => {
      game.roll('a', 4);
    }).toThrow('Please enter a number!');
  });
});

describe('input is a negative number', () => {
  test('throws an error', () => {
    expect(() => {
      game.roll(-1, -4);
    }).toThrow('You cannot throw a negative roll!');
  });
});

describe('test cases', () => {
  beforeEach(() => {
    game = new Game();

    multiRoll = (num, one, two) => {
      for (let i = 0; i < num; i += 1) {
        game.roll(one, two);
      }
    };
  });

  test('returns 0 for a gutter game', () => {
    multiRoll(9, 0, 0);
    game.finalRoll(0, 0);
    expect(game.fetchScore()).toEqual(0);
  });

  test('returns 10 for a game of ones', () => {
    multiRoll(9, 1, 0);
    game.finalRoll(1, 0);
    expect(game.fetchScore()).toEqual(10);
  });

  test('returns 150 for a game of fives', () => {
    multiRoll(9, 5, 5);
    game.finalRoll(5, 5);
    game.bonusRoll(5);
    expect(game.fetchScore()).toEqual(150);
  });

  test('returns 300 for a perfect game', () => {
    multiRoll(9, 10, 'x');
    game.finalRoll(10, 10);
    game.bonusRoll(10);
    expect(game.fetchScore()).toEqual(300);
  });
});
