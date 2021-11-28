const Game = require('./game');

let game;

beforeEach(() => {
  game = new Game;
});

test('calculates a gutter game', () => {
  for(let i = 0; i < 20; i++) {
    game.roll(0); 
  }
  expect(game.points).toEqual(0);
});

test('calculates all ones', () => {
  for(let i = 0; i < 20; i++) {
    game.roll(1);
  }
  expect(game.points).toEqual(20);
});

test ('calculates a spare', () => {
  game.roll(5);
  game.roll(5);
  game.roll(3);
  for(let i = 0; i < 17; i++) {
    game.roll(0);
  }
  expect(game.points).toEqual(16);
});
