const Game = require('./game')

describe('Game', (name) => {

  it('should allow user to add a score using addRollScore()', () => {
    game = new Game();
    expect(() => {
      game.addRollScore(5)
    }).not.toThrow();
  });


});