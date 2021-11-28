// const { it } = require('jest-circus');
const Game = require('./game');

let game;

beforeEach(() => {
  game = new Game;
});

describe('gutter game', () => {
  it('calculates a gutter game', () => {
    for(let i = 0; i < 20; i++) {
      game.roll(0); 
    }
    expect(game.points).toEqual(0);
  });
});

describe('all ones', () => {
  it('calculates all ones', () => {
    for(let i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.points).toEqual(20);
  });
});


describe('spare', () => {
  it('calculates a spare', () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    for(let i = 0; i < 17; i++) {
      game.roll(0);
    }
    expect(game.points).toEqual(16);
  });
});

describe('strike', () => {
  it('calculates a strike', () => {
    game.roll(10);
    game.roll(5);
    game.roll(3);
    for (let i = 0; i < 16; i++){
      game.roll(0);
    }
    expect(game.points).toEqual(26);
  });
});