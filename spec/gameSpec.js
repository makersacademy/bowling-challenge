'use strict';
describe('Game', function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });
  it('has a score of 0', function() {
    expect(game.score).toEqual(0)
  });
  it('keeps score of the game', function() {
    game.roll(4, 3)
    expect(game.score).toEqual(7)
  });
});
