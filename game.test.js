const Game = require('./game');
  
test('calculates a gutter game', () => {
  const game = new Game;
  for(let i = 0; i < 20; i++) {
    game.roll(0); 
  }
  expect(game.points).toEqual(0);
});
