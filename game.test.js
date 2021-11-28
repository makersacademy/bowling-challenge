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
